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
	id: string;
	handler: (props: IObserverHandlerProps) => void;
}
