import { isPlatformBrowser } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { ScrollObserverService } from '../../services/scroll-observer.service';
import { clamp } from '../../utils/clamp';

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

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any,
		private renderer: Renderer2,
		private scrollObserver: ScrollObserverService
	) {
		// this.scrollObserver.registerObserver({
		// 	id: '3',
		// 	handler: (props) => {
		// 		if (!this.containerRef) return;
		// 		const container = this.containerRef.nativeElement;
		// 		const textDirection = props.scroll.isScrollingDown
		// 			? 'normal'
		// 			: 'reverse';
		// 		container.style.setProperty('--animation_direction', textDirection);
		// 	},
		// });
	}

	ngAfterViewInit() {
		//]
		const container = this.containerRef.nativeElement;
		const ulElements = container.querySelectorAll(
			'ul'
		) as NodeListOf<HTMLUListElement>;

		if (isPlatformBrowser(this.platformId)) {
			const startAnimation = 0;
			const endAnimation = -100;
			const duration = 10000;
			const pixel = (endAnimation - startAnimation) / duration;
			const tick = 10;
			let progress = 0;
			let speed = 1;

			Array.prototype.forEach.call(ulElements, (element) => {
				const animation = setInterval(() => {
					if (progress <= endAnimation) {
						progress = 0;
					}
					console.log(pixel);
					this.renderer.setStyle(element, 'translate', `${progress}%`);
					progress = clamp(progress + pixel * tick, -100, 0);
				}, tick);
			});
		} else {
			const ulElement = container.querySelector('ul') as HTMLElement;

			this.renderer.appendChild(container, ulElement.cloneNode(true));
		}
	}
}
