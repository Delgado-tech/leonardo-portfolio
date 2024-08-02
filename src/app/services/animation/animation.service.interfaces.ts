import { Animation } from './animation.model';

export interface IAnimationListItem {
	id: number;
	animation: Animation;
}

export interface IAnimationGroup {
	HTMLElements: HTMLElement[];
	animations: IAnimationProps[];
}

export interface IAnimationProps {
	style: string;
	styleValueMask?: string;
	unit?: string;
	start?: number;
	end?: number;
	startDelay?: number;
	animationSpace?: number;
	delay?: number;
	duration?: number;
	animationSpeed?: number;
	reverse?: boolean;
	scrollChangeDirection?: boolean;
	scrollAcceleration?: boolean;
	infinite?: boolean;
	repeat?: number;
	repeatDelay?: number;
	returnToStartWhenEnd?: boolean;
	returnToStartWhenEndDelay?: number;
}
