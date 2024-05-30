import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	inject,
	NgZone,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { AnimationService } from '../../services/animation/animation.service';
import { clamp } from '../../utils/clamp';

@Component({
	selector: 'app-character',
	standalone: true,
	imports: [],
	templateUrl: './character.component.html',
	styleUrl: './character.component.scss',
})
export class CharacterComponent {
	@ViewChild('character') characterRef!: ElementRef<HTMLElement>;

	eyesElement!: HTMLElement;
	eyebrowsElement!: HTMLElement;
	eyesLookLeftAnimationId?: number;
	outsideOfCharacterDiv: boolean = false;

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any,
		private renderer: Renderer2,
		private animationService: AnimationService
	) {
		if (isPlatformBrowser(this.platformId)) {
			inject(NgZone).runOutsideAngular(() => {
				const interval = setInterval(() => {
					if (!this.eyesElement) return;

					this.animation_eyesLookLeft();
					this.aniamtion_eyesWink();

					clearInterval(interval);
				}, 10);
			});
		}
	}

	aniamtion_eyesWink() {
		this.animationService.createAnimationGroup({
			HTMLElements: [this.eyesElement],
			animations: [
				{
					style: 'scale',
					styleValueMask: '100% ???',
					unit: '%',
					start: 100,
					end: 10,
					returnToStartWhenEnd: true,
					returnToStartWhenEndDelay: 50,
					infinite: true,
					repeat: 1,
					duration: 50,
					delay: 8000,
					animationSpace: 10000,
				},
				{
					style: 'scale',
					styleValueMask: '100% ???',
					unit: '%',
					start: 100,
					end: 10,
					returnToStartWhenEnd: true,
					returnToStartWhenEndDelay: 50,
					infinite: true,
					duration: 50,
					delay: 2000,
					animationSpace: 10000,
				},
			],
		});
	}

	animation_eyesLookLeft() {
		this.eyesLookLeftAnimationId = this.animationService.createAnimationGroup({
			HTMLElements: [this.eyesElement!],
			animations: [
				{
					style: 'translate',
					unit: 'px',
					start: 0,
					end: -2,
					returnToStartWhenEnd: true,
					returnToStartWhenEndDelay: 50,
					duration: 50,
					infinite: true,
					delay: 11000,
				},
			],
		});
	}

	ngAfterViewInit() {
		if (isPlatformServer(this.platformId)) return;

		const character = this.characterRef.nativeElement;
		const eyes = character.querySelector('#eyes') as HTMLElement;
		const eyebrows = character.querySelector('#eyebrows') as HTMLElement;

		this.eyesElement = eyes;
		this.eyebrowsElement = eyebrows;

		this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
			const eyebrowsLeft = this.eyebrowsElement.querySelector(
				'#eyebrow-left'
			) as HTMLElement;

			const eyebrowsRight = this.eyebrowsElement.querySelector(
				'#eyebrow-right'
			) as HTMLElement;

			const eyesRect = this.eyesElement.getBoundingClientRect();

			// verifica se o mouse esta passando pela div pai do personagem
			if (character.parentElement!.contains(event.target as HTMLElement)) {
				const rangeX = 1.8;
				const rangeY = 0.1;

				if (
					this.eyesLookLeftAnimationId !== undefined &&
					this.outsideOfCharacterDiv
				)
					this.animationService.pauseAnimation(
						this.eyesLookLeftAnimationId,
						() => true
					);

				let x = clamp(
					(event.clientX - eyesRect.left) / eyesRect.width,
					-rangeX,
					rangeX
				);

				let y = clamp(
					(event.clientY - eyesRect.top) / eyesRect.top,
					-rangeY,
					rangeY
				);

				// animação das sombrancelha direita
				if (x >= 0.3 && y <= -rangeY) {
					eyebrowsRight.style.translate = '2px';
					eyebrowsRight.style.rotate = '20deg';
				} else {
					eyebrowsRight.style.translate = '0px';
					eyebrowsRight.style.rotate = '0deg';
				}

				// animação das sombrancelha esquerda
				if (x <= 0.7 && y <= -rangeY) {
					eyebrowsLeft.style.translate = '2px';
					eyebrowsLeft.style.rotate = '-20deg';
				} else {
					eyebrowsLeft.style.translate = '0px';
					eyebrowsLeft.style.rotate = '0deg';
				}

				// animação dos olhos
				this.eyesElement.style.translate = `${x}% ${y}%`;

				this.outsideOfCharacterDiv = false;
			} else {
				if (!this.outsideOfCharacterDiv) {
					if (this.eyesLookLeftAnimationId !== undefined)
						this.animationService.pauseAnimation(
							this.eyesLookLeftAnimationId,
							() => false
						);

					// voltar olhos e sombramcelhas ao ponto inicial
					this.eyesElement.style.translate = `0% 0%`;
					eyebrowsLeft.style.translate = '0px';
					eyebrowsLeft.style.rotate = '0deg';
					eyebrowsRight.style.translate = '0px';
					eyebrowsRight.style.rotate = '0deg';
				}

				this.outsideOfCharacterDiv = true;
			}
		});
	}
}
