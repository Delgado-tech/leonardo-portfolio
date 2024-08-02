import { Renderer2 } from '@angular/core';
import { clamp } from '../../utils/clamp';
import { ScrollObserverService } from '../scroll-observer/scroll-observer.service';
import { IAnimationProps } from './animation.service.interfaces';

export class Animation {
	private isPaused: boolean = false;
	private calledDestroy: boolean = false;

	constructor(
		public animationId: number,
		private renderer: Renderer2,
		private scrollObserver: ScrollObserverService,
		private HTMLElements: HTMLElement[],
		private animations: IAnimationProps[]
	) {
		this.startAnimations();
	}

	startAnimations() {
		this.animations.forEach((animation) => {
			this.callAnimation(animation);
		});
	}

	private callAnimation(animationProps: IAnimationProps): void {
		if (this.HTMLElements.length === 0) return;

		const unit = animationProps.unit ?? '%';
		const styleValueMask = animationProps.styleValueMask ?? '???';
		const delay = animationProps.delay ?? 0;
		const startDelay = animationProps.startDelay ?? delay;

		if (animationProps.reverse)
			[animationProps.start, animationProps.end] = [
				animationProps.end,
				animationProps.start,
			];

		const startOffset = animationProps.start ?? 0;
		const endOffset = animationProps.end ?? 100;
		const startGreaterThanEnd = startOffset > endOffset ? -1 : 1;

		const lowestValue = endOffset > startOffset ? startOffset : endOffset;
		const highestValue = endOffset < startOffset ? startOffset : endOffset;

		const tickInterval = 10;
		const animationDuration = animationProps.duration ?? 5000;
		const pixelsPerTick =
			(Math.abs(endOffset - startOffset) / animationDuration) * tickInterval;

		const syncDelay =
			(animationProps.animationSpace ?? animationDuration + delay) -
			(animationDuration + delay);

		const returnToStartWhenEndDelay =
			animationProps.returnToStartWhenEndDelay ?? 1000;
		const repeat = animationProps.repeat ?? 0;
		const repeatDelay = animationProps.repeatDelay ?? 0;
		let currentRepeat = 0;

		let animationSpeed = animationProps.animationSpeed ?? 1;

		const setAnimation = (element: HTMLElement) => {
			let returnedToOrigin = false;
			let animationEnded = false;
			let progress = startOffset;
			let direction = (animationProps.reverse ? -1 : 1) * startGreaterThanEnd;
			let hasChangedDirection = false;
			let isPauseToReturnToStartWhenEndDelay = false;

			const animation = setInterval(() => {
				if (this.isPaused || isPauseToReturnToStartWhenEndDelay) return;

				if (this.calledDestroy) {
					clearInterval(animation);
					return;
				}

				if (
					(progress === endOffset && !returnedToOrigin) ||
					(progress === startOffset && returnedToOrigin)
				) {
					if (animationProps.returnToStartWhenEnd && !returnedToOrigin) {
						returnedToOrigin = true;
						direction *= -1;
						isPauseToReturnToStartWhenEndDelay = true;

						setTimeout(() => {
							isPauseToReturnToStartWhenEndDelay = false;
						}, returnToStartWhenEndDelay);
					} else {
						animationEnded = true;
					}
				}

				if (animationProps.scrollChangeDirection) {
					const isScrollingDown = this.scrollObserver.isScrollingDown();

					if (isScrollingDown !== hasChangedDirection) {
						hasChangedDirection = !hasChangedDirection;
						direction *= -1;
					}
				}

				const scrollAcceleration = animationProps.scrollAcceleration
					? this.scrollObserver.accelaration + 1
					: 1;

				// verifica se o progresso da animação chegou em uma das extremidades
				// e se a direção da animação aponta para ela, caso sim, o progresso
				// da animação é retornado para a extremidade oposta.
				// caso o valor inicial da animação seja maior que o do final
				// será invertido a direção analisada.

				if (animationProps.scrollChangeDirection) {
					if (progress >= highestValue && direction > 0) {
						progress = lowestValue;
					} else if (progress <= lowestValue && direction < 0) {
						progress = highestValue;
					}
				}

				// renderiza na tela a alteração de estado do estilo
				this.renderer.setStyle(
					element,
					animationProps.style,
					styleValueMask.replaceAll('???', `${progress}${unit}`)
				);
				progress +=
					pixelsPerTick * animationSpeed * direction * scrollAcceleration;
				progress = clamp(progress, lowestValue, highestValue);

				if (animationEnded) {
					clearInterval(animation);
					if (currentRepeat < repeat) {
						setTimeout(() => {
							setAnimation(element);
						}, repeatDelay);

						currentRepeat++;
					} else {
						if (animationProps.infinite) {
							setTimeout(() => {
								setTimeout(() => {
									currentRepeat = 0;
									setAnimation(element);
								}, delay);
							}, syncDelay);
						}
					}
				}
			}, tickInterval);
		};

		setTimeout(() => {
			this.HTMLElements.forEach((element: HTMLElement) => {
				setAnimation(element);
			});
		}, startDelay);
	}

	destroy() {
		this.calledDestroy = true;
	}

	pause(func: (isPaused: boolean) => boolean): void {
		this.isPaused = func(this.isPaused);
	}
}
