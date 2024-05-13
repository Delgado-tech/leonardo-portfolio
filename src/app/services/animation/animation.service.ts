import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ScrollObserverService } from '../scroll-observer/scroll-observer.service';
import { IAnimationOptions } from './animation.service.interfaces';

@Injectable()
export class AnimationService {
	private renderer: Renderer2;

	constructor(
		private rendererFactory: RendererFactory2,
		private scrollObserver: ScrollObserverService
	) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	animation(nodeList: NodeList, options: IAnimationOptions) {
		if (nodeList.length === 0) return;

		const unit = options.unit ?? '%';

		const startOffset = options.start ?? 0;
		const endOffset = options.end ?? 100;
		const startGreaterThanEnd = startOffset > endOffset ? -1 : 1;

		const lowestValue = endOffset > startOffset ? startOffset : endOffset;
		const highestValue = endOffset < startOffset ? startOffset : endOffset;

		const tickInterval = 10;
		const animationDuration = options.duration ?? 5000;
		const pixelsPerTick =
			((endOffset - startOffset) / animationDuration) * tickInterval;

		let animationSpeed = options.animationSpeed ?? 1;

		Array.prototype.forEach.call(nodeList, (element: HTMLElement) => {
			let progress = startOffset;
			let direction = options.reverse ? -1 : 1;
			let hasChangedDirection = false;

			const animation = setInterval(() => {
				if (element.dataset['animation-pause'] === 'true') return;

				if (element.dataset['animation-destroy'] === 'true') {
					clearInterval(animation);
					return;
				}

				if (
					!options.infinite &&
					Math.round(progress) === Math.round(endOffset)
				) {
					clearInterval(animation);
					return;
				}

				if (options.scrollChangeDirection) {
					const isScrollingDown = this.scrollObserver.isScrollingDown();

					if (isScrollingDown !== hasChangedDirection) {
						hasChangedDirection = !hasChangedDirection;
						direction *= -1;
					}
				}

				const scrollAcceleration = options.scrollAcceleration
					? this.scrollObserver.accelaration + 1
					: 1;

				// verifica se o progresso da animação chegou em uma das extremidades
				// e se a direção da animação aponta para ela, caso sim, o progresso
				// da animação é retornado para a extremidade oposta.
				// caso o valor inicial da animação seja maior que o do final
				// será invertido a direção analisada.
				if (progress >= highestValue && direction * startGreaterThanEnd > 0) {
					progress = lowestValue;
				} else if (
					progress <= lowestValue &&
					direction * startGreaterThanEnd < 0
				) {
					progress = highestValue;
				}

				// renderiza na tela a alteração de estado do estilo
				this.renderer.setStyle(element, options.style, `${progress}${unit}`);
				progress +=
					pixelsPerTick * animationSpeed * direction * scrollAcceleration;
			}, tickInterval);
		});
	}
}
