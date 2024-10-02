import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollObserverService } from '../../../services/scroll-observer/scroll-observer.service';
import { clamp } from '../../../utils/clamp';

@Component({
	selector: 'app-display-media-banner-overlay',
	standalone: true,
	imports: [],
	templateUrl: './display-media-banner-overlay.component.html',
	styleUrl: './display-media-banner-overlay.component.scss',
})
export class DisplayMediaBannerOverlayComponent {
	/**
	 * Para alterar a distância do parallax de forma individual a cada elemento
	 * adicione [attr.data-movement-range]="valor" em cada elemento, o valor deve
	 * estar entre 0 e 50 e por padrão ele é 15
	 */
	@ViewChild('BannerOverlay') bannerOverlay!: ElementRef<HTMLElement>;

	constructor(private scrollObserver: ScrollObserverService) {}

	ngAfterViewInit() {
		this.scrollObserver.registerObserver({
			HTMLElement: this.bannerOverlay,
			handler: (props) => {
				const bannerOverlay = this.bannerOverlay.nativeElement;
				const images = bannerOverlay.children;
				const animationPercentage =
					props.element.topToBottomDistancePercentage('center');

				Array.from(images).map((el) => {
					const img = el as HTMLImageElement;
					const movementRange = clamp(
						Number.parseInt(img.dataset['movementRange'] ?? '15'),
						0,
						50
					);

					img.style.top = `${clamp(
						animationPercentage,
						50 - movementRange,
						50 + movementRange
					)}%`;
				});
			},
		});
	}
}
