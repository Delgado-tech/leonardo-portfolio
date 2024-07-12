import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	inject,
	Inject,
	Input,
	NgZone,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { AnimationService } from '../../services/animation/animation.service';

@Component({
	selector: 'app-content-slider',
	standalone: true,
	imports: [],
	templateUrl: './content-slider.component.html',
})
export class ContentSliderComponent {
	@Input('scroll-change-direction') scrollChangeDirection?: boolean;
	@Input('use-scroll-acceleration') scrollAcceleration?: boolean;
	@Input('animation-duration') duration?: number;
	@Input('reverse') reverse?: boolean;

	@ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

	wrapperElements: HTMLElement[] = [];

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any,
		private renderer: Renderer2,
		private animationService: AnimationService
	) {
		if (isPlatformBrowser(this.platformId)) {
			inject(NgZone).runOutsideAngular(() => {
				const interval = setInterval(() => {
					if (!this.wrapperElements) return;

					let start = -50,
						end = 0;

					if (this.reverse) {
						[start, end] = [end, start];
					}

					this.animationService.createAnimationGroup({
						HTMLElements: this.wrapperElements,
						animations: [
							{
								style: 'translate',
								start,
								end,
								scrollChangeDirection: this.scrollChangeDirection,
								scrollAcceleration: this.scrollAcceleration,
								infinite: true,
								duration: this.duration ?? 20000,
							},
						],
					});

					clearInterval(interval);
				}, 10);
			});
		}
	}

	ngAfterViewInit() {
		const container = this.containerRef.nativeElement;

		if (isPlatformServer(this.platformId)) {
			const wrapperElement =
				(container.querySelector('.wrapper') as HTMLElement) ??
				container.firstChild;

			if (!wrapperElement) {
				console.warn('Missing children on content-slider');
				return;
			}

			const wrapperParentElement = wrapperElement.parentElement;

			this.renderer.appendChild(
				wrapperParentElement,
				wrapperElement.cloneNode(true)
			);
		} else {
			const elements = container.querySelector('.wrapper') as HTMLElement;
			this.wrapperElements.push(elements.parentElement!);
		}
	}
}
