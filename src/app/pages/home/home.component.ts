import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	inject,
	Inject,
	NgZone,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { AnimationService } from '../../services/animation/animation.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	@ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

	img_star: string = '../../../assets/shapes/star.svg';

	ulElements?: NodeListOf<HTMLUListElement>;

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any,
		private renderer: Renderer2,
		private animationService: AnimationService
	) {
		if (isPlatformBrowser(this.platformId)) {
			inject(NgZone).runOutsideAngular(() => {
				const interval = setInterval(() => {
					if (!this.ulElements) return;

					this.animationService.animation(this.ulElements, {
						style: 'translate',
						start: 0,
						end: -100,
						scrollChangeDirection: true,
						scrollAcceleration: true,
						infinite: true,
						duration: 20000,
					});

					clearInterval(interval);
				}, 10);
			});
		}
	}

	ngAfterViewInit() {
		const container = this.containerRef.nativeElement;
		this.ulElements = container.querySelectorAll(
			'ul'
		) as NodeListOf<HTMLUListElement>;

		if (isPlatformServer(this.platformId)) {
			const ulElement = container.querySelector('ul') as HTMLElement;

			this.renderer.appendChild(container, ulElement.cloneNode(true));
		}
	}
}
