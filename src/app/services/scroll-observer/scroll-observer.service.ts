import { isPlatformBrowser } from '@angular/common';
import {
	Inject,
	Injectable,
	PLATFORM_ID,
	Renderer2,
	RendererFactory2,
} from '@angular/core';
import { clamp } from '../../utils/clamp';
import { IObserverItem } from './scroll-observer.service.interfaces';

@Injectable()
export class ScrollObserverService {
	private renderer: Renderer2;
	private unlistenScrollEvent = () => {};

	private observerList: IObserverItem[] = [];
	private lastScrollPositon: number = 0;

	private scrollPosition: number = 0;
	private scrollHeight: number = 0;
	private scrollPercentage: number = 0;
	private _isScrollingDown: boolean = false;
	private accelerationTimeout?: NodeJS.Timeout;
	public accelaration: number = 0;

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any,
		private rendererFactory: RendererFactory2
	) {
		this.renderer = this.rendererFactory.createRenderer(null, null);

		if (isPlatformBrowser(this.platformId)) {
			this.setScrollEvent();
		}
	}

	private onScroll() {
		this.scrollPosition = window.scrollY;
		this.scrollHeight = window.innerHeight;
		this.scrollPercentage =
			(((this.scrollHeight - this.scrollPosition) / this.scrollHeight) * 100 -
				100) *
			-1;

		this._isScrollingDown = this.scrollPosition >= this.lastScrollPositon;
		this.lastScrollPositon = this.scrollPosition;

		this.setScrollAcceleration();

		this.observerList.forEach((obs) => {
			const element = obs.HTMLElement.nativeElement;
			if (!element) return;

			const rect = element.getBoundingClientRect();
			const distanceTop = rect.top - rect.height;
			const distanceBottom = rect.bottom - rect.height;
			const topInView = distanceTop <= 0;
			const bottomInView = distanceTop <= 0;

			const topToBottomDistancePercentage = clamp(
				((rect.height - distanceBottom) / rect.height) * 100,
				0,
				100
			);

			obs.handler({
				element: {
					HTMLElement: element,
					rect,
					distanceTop,
					distanceBottom,
					topToBottomDistancePercentage,
					topInView,
					bottomInView,
				},
				scroll: {
					scrollPosition: this.scrollPosition,
					scrollHeight: this.scrollHeight,
					scrollPercentage: this.scrollPercentage,
					isScrollingDown: this._isScrollingDown,
				},
				unregister: () =>
					this.unregisterObserver({
						HTMLElement: obs.HTMLElement,
						handler: obs.handler,
					}),
			});
		});
	}

	private setScrollEvent() {
		this.scrollPosition = window.scrollY;
		this.scrollPercentage = window.screen.height;
		const listiner = () => this.onScroll();

		this.unlistenScrollEvent = this.renderer.listen(
			'document',
			'scroll',
			listiner
		);
	}

	private setScrollAcceleration() {
		this.accelaration += 0.05;
		clearTimeout(this.accelerationTimeout);
		const accelerationTimeout = setTimeout(() => {
			const decelerationInterval = setInterval(() => {
				this.accelaration -= 0.5;
				if (this.accelaration <= 0) {
					this.accelaration = 0;
					clearInterval(decelerationInterval);
				}
			});
		}, 20);
		this.accelerationTimeout = accelerationTimeout;
	}

	getScrollPosition(): number {
		return this.scrollPosition;
	}

	getScrollHeight(): number {
		return this.scrollHeight;
	}

	getScrollPercentage(): number {
		return this.scrollPercentage;
	}

	isScrollingDown(): boolean {
		return this._isScrollingDown;
	}

	registerObserver({ HTMLElement, handler }: IObserverItem): IObserverItem {
		const observerItem: IObserverItem = { HTMLElement, handler };

		this.observerList.push(observerItem);
		return observerItem;
	}

	unregisterObserver({ HTMLElement, handler }: IObserverItem) {
		const index = this.observerList.indexOf({ HTMLElement, handler });
		this.observerList.splice(index);
	}

	ngOnDestroy() {
		this.unlistenScrollEvent();
	}
}
