import { isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { ScrollObserverService } from '../../services/scroll-observer/scroll-observer.service';
import { IObserverItem } from '../../services/scroll-observer/scroll-observer.service.interfaces';

@Component({
	selector: 'app-tooltip',
	standalone: true,
	imports: [],
	templateUrl: './tooltip.component.html',
	styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {
	@ViewChild('ContentDiv') contentDivRef!: ElementRef<HTMLElement>;
	@ViewChild('Tooltip') tooltipRef!: ElementRef<HTMLElement>;

	isTooltipOnBottom: boolean = true;
	isTooltipCentrilized: boolean = false;
	tooltipScrollObserver!: IObserverItem;

	constructor(
		@Inject(PLATFORM_ID)
		private plataformId: any,
		private renderer: Renderer2,
		private scrollObserver: ScrollObserverService
	) {}

	ngAfterViewInit() {
		if (isPlatformServer(this.plataformId)) return;

		const contentDiv = this.contentDivRef.nativeElement;
		const tooltip = this.tooltipRef.nativeElement;
		const tooltipArrowWrapper = tooltip.querySelector(
			'.tooltip_arrow_wrapper'
		) as HTMLElement;
		const tooltipArrow = tooltipArrowWrapper.children[0] as HTMLElement;

		const contentDivRect = contentDiv.getBoundingClientRect();

		const gap = 10;

		const onMouseEnter = () => {
			tooltip.style.display = 'inherit';

			const tooltipRect = tooltip.getBoundingClientRect();

			const tooltipCenterOffset =
				tooltipRect.width / 2 - contentDivRect.width / 2;

			const tooltipArrowCenterOffset = tooltipCenterOffset; // 4px é o tamanho da metade da seta do tooltip

			const tooltipArrowCenterContentOffset = contentDivRect.width / 2; // 4px é o tamanho da metade da seta do tooltip

			console.log(tooltipArrowCenterContentOffset);

			if (
				tooltipRect.left - tooltipCenterOffset > 0 &&
				!this.isTooltipCentrilized
			) {
				// centralizar tooltip no elemento
				tooltip.style.transform = `translateX(-${tooltipCenterOffset}px)`;
				tooltipArrowWrapper.style.transform = `translateX(${tooltipArrowCenterOffset}px)`;
				this.isTooltipCentrilized = true;
			} else if (tooltipRect.left < 0 && this.isTooltipCentrilized) {
				tooltip.style.transform = 'translateX(0)';
				tooltipArrowWrapper.style.transform = `translateX(${tooltipArrowCenterContentOffset}px)`;
				this.isTooltipCentrilized = false;
			}

			const setTooltipAxisY = (distanceBottom: number) => {
				const tooltipAndContentDivHeightArea =
					contentDivRect.height + tooltipRect.height;

				if (distanceBottom <= 0 && !this.isTooltipOnBottom) {
					tooltip.style.top = `${contentDivRect.height + gap}px`;
					tooltipArrow.style.rotate = '180deg';
					tooltipArrowWrapper.style.bottom = 'auto';
					tooltipArrowWrapper.style.top = '-4px';
					this.isTooltipOnBottom = true;
				} else if (
					tooltipAndContentDivHeightArea - distanceBottom <= 0 &&
					this.isTooltipOnBottom
				) {
					tooltip.style.top = `-${tooltipRect.height + gap}px`;
					tooltipArrow.style.rotate = '0deg';
					tooltipArrowWrapper.style.bottom = '-4px';
					tooltipArrowWrapper.style.top = 'auto';
					this.isTooltipOnBottom = false;
				}
			};

			const tooltipDistanceBottom = tooltipRect.bottom - tooltipRect.height;
			setTooltipAxisY(tooltipDistanceBottom);

			this.tooltipScrollObserver = this.scrollObserver.registerObserver({
				HTMLElement: this.tooltipRef,
				handler: (props) => {
					setTooltipAxisY(props.element.distanceBottom);
				},
			});
		};

		const onMouseOut = () => {
			this.scrollObserver.unregisterObserver(this.tooltipScrollObserver);
			tooltip.style.display = 'none';
		};

		this.renderer.listen(contentDiv, 'mouseenter', onMouseEnter);
		this.renderer.listen(contentDiv, 'mouseout', onMouseOut);
	}
}
