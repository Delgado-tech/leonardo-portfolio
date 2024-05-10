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
		this.scrollObserver.registerObserver({
			id: '3',
			handler: (props) => {
				if (!this.containerRef) return;
				const container = this.containerRef.nativeElement;

				const textDirection = props.scroll.isScrollingDown
					? 'normal'
					: 'reverse';
				container.style.setProperty('--animation_direction', textDirection);
			},
		});
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) return;

		const container = this.containerRef.nativeElement;
		const ulElement = container.querySelector('ul') as HTMLElement;

		this.renderer.appendChild(container, ulElement.cloneNode(true));
	}
}
