import { ElementRef } from '@angular/core';

export interface IObserverHandlerProps {
	element: {
		HTMLElement: HTMLElement;
		rect: DOMRect;
		distanceTop: number;
		distanceBottom: number;
		topToBottomDistancePercentage: number;
		topInView: boolean;
		bottomInView: boolean;
	};
	scroll: {
		scrollPosition: number;
		scrollHeight: number;
		scrollPercentage: number;
		isScrollingDown: boolean;
	};
	unregister: () => void;
}

export interface IObserverItem {
	HTMLElement: ElementRef<HTMLElement>;
	handler: (props: IObserverHandlerProps) => void;
}
