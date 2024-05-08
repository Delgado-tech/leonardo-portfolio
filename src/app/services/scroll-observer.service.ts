import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { clamp } from '../utils/clamp';
import { IObserverItem } from './scroll-observer.service.interfaces';

@Injectable()
export class ScrollObserverService {
	private observerList: IObserverItem[] = [];
	private lastScrollPositon: number = 0;

	private scrollPosition: number = 0;
	private scrollHeight: number = 0;
	private scrollPercentage: number = 0;
	private _isScrollingDown: boolean = true;

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any
	) {
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

		this.observerList!.forEach((obs) => {
			const element = document.getElementById(obs.id);
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
					this.unregisterObserver({ id: obs.id, handler: obs.handler }),
			});
		});
	}

	private setScrollEvent() {
		this.scrollPosition = window.scrollY;
		this.scrollPercentage = window.screen.height;
		const listiner = () => this.onScroll();

		document.removeEventListener('scroll', listiner);
		document.addEventListener('scroll', listiner);
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

	registerObserver({ id, handler }: IObserverItem) {
		this.observerList.push({
			id,
			handler,
		});
	}

	unregisterObserver({ id, handler }: IObserverItem) {
		const index = this.observerList.indexOf({ id: id, handler: handler });
		this.observerList.splice(index);
	}
}
