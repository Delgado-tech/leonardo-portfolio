import { isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	Input,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
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
	@Input('tooltip-content') tooltipContent!: SafeHtml;

	@ViewChild('ContentDiv') contentDivRef!: ElementRef<HTMLElement>;
	@ViewChild('Tooltip') tooltipRef!: ElementRef<HTMLElement>;

	isTooltipOnBottom: boolean = true;
	isTooltipCentrilized: boolean = false;
	tooltipScrollObserver!: IObserverItem;

	private readonly GAP = 10;
	private readonly ARROW_SIZE = 8;

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

		const onMouseEnter = () => {
			tooltip.style.display = 'inherit';

			const tooltipRect = tooltip.getBoundingClientRect();
			const contentDivRect = contentDiv.getBoundingClientRect();

			const tooltipCenterOffset =
				tooltipRect.width / 2 - contentDivRect.width / 2;
			const tooltipArrowCenterOffset = tooltipRect.width / 2 - this.ARROW_SIZE; // 8px é o tamanho da seta do tooltip
			const tooltipArrowCenterContentOffset =
				contentDivRect.width / 2 - this.ARROW_SIZE; // 8px é o tamanho da seta do tooltip

			if (
				tooltipRect.left - tooltipCenterOffset > 0 &&
				!this.isTooltipCentrilized
			) {
				// centralizar tooltip no elemento
				tooltip.style.transform = `translateX(-${tooltipCenterOffset}px)`;
				tooltip.style.right = 'auto';
				tooltipArrowWrapper.style.transform = `translateX(${tooltipArrowCenterOffset}px)`;
				tooltipArrowWrapper.style.left = `0`;
				tooltipArrowWrapper.style.right = `auto`;
				this.isTooltipCentrilized = true;
			} else if (
				(tooltipRect.left < 0 && this.isTooltipCentrilized) ||
				!this.isTooltipCentrilized
			) {
				tooltip.style.transform = 'translateX(0)';
				tooltip.style.right = 'auto';
				tooltipArrowWrapper.style.transform = `translateX(${tooltipArrowCenterContentOffset}px)`;
				tooltipArrowWrapper.style.left = `0`;
				tooltipArrowWrapper.style.right = `auto`;
				this.isTooltipCentrilized = false;
			}

			const tooltipDistanceLeftEnd =
				tooltip.getBoundingClientRect().width +
				tooltip.getBoundingClientRect().left;

			if (
				(window.innerWidth ?? 0) - tooltipDistanceLeftEnd < 0 &&
				this.isTooltipCentrilized
			) {
				tooltip.style.transform = 'translateX(0)';
				tooltip.style.right = '0';
				tooltipArrowWrapper.style.transform = `translateX(-${tooltipArrowCenterContentOffset}px)`;
				tooltipArrowWrapper.style.left = `auto`;
				tooltipArrowWrapper.style.right = `0`;
			}

			const setTooltipAxisY = (distanceBottom: number) => {
				const tooltipAndContentDivHeightArea =
					contentDivRect.height + tooltipRect.height;

				if (distanceBottom <= 0 && !this.isTooltipOnBottom) {
					this.placeTooltipBottom(
						tooltip,
						tooltipArrowWrapper,
						tooltipArrow,
						contentDiv
					);
				} else if (
					tooltipAndContentDivHeightArea - distanceBottom <= 0 &&
					this.isTooltipOnBottom
				) {
					this.placeTooltipTop(tooltip, tooltipArrowWrapper, tooltipArrow);
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
		this.renderer.listen('window', 'resize', () => {
			const tooltipDistanceLeftEnd =
				tooltip.getBoundingClientRect().width +
				tooltip.getBoundingClientRect().left;

			if (
				(window.innerWidth ?? 0) - tooltipDistanceLeftEnd > 0 &&
				this.isTooltipCentrilized
			) {
				tooltip.style.transform = 'translateX(0)';
				tooltip.style.right = 'auto';
				this.isTooltipCentrilized = false;
			}
		});
	}

	private placeTooltipTop(
		tooltip: HTMLElement,
		tooltipArrowWrapper: HTMLElement,
		tooltipArrow: HTMLElement
	) {
		tooltip.style.top = `-${
			tooltip.getBoundingClientRect().height + this.GAP
		}px`;
		tooltipArrow.style.rotate = '0deg';
		tooltipArrowWrapper.style.bottom = `-${this.ARROW_SIZE / 2}px`;
		tooltipArrowWrapper.style.top = 'auto';
		this.isTooltipOnBottom = false;
	}

	private placeTooltipBottom(
		tooltip: HTMLElement,
		tooltipArrowWrapper: HTMLElement,
		tooltipArrow: HTMLElement,
		contentDiv: HTMLElement
	) {
		tooltip.style.top = `${
			contentDiv.getBoundingClientRect().height + this.GAP
		}px`;
		tooltipArrow.style.rotate = '180deg';
		tooltipArrowWrapper.style.bottom = 'auto';
		tooltipArrowWrapper.style.top = `-${this.ARROW_SIZE / 2}px`;
		this.isTooltipOnBottom = true;
	}
}
