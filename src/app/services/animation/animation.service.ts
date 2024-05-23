import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ScrollObserverService } from '../scroll-observer/scroll-observer.service';
import { Animation } from './animation.model';
import {
	IAnimationGroup,
	IAnimationListItem,
} from './animation.service.interfaces';

@Injectable()
export class AnimationService {
	private renderer: Renderer2;
	private animationList: IAnimationListItem[] = [];
	private animationListCurrentId: number = 0;

	constructor(
		private rendererFactory: RendererFactory2,
		private scrollObserver: ScrollObserverService
	) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	createAnimationGroup(animationGroup: IAnimationGroup): number {
		const animationId = this.animationListCurrentId;

		const animation = new Animation(
			animationId,
			this.renderer,
			this.scrollObserver,
			animationGroup.HTMLElements,
			animationGroup.animations
		);

		this.animationList.push({ id: animationId, animation });
		this.animationListCurrentId++;

		return animationId;
	}

	destroyAnimation(id: number): void {
		let deleteIndex: number | undefined;
		this.animationList.map((item, index) => {
			if (item.id === id) {
				item.animation.destroy();
				deleteIndex = index;
				return;
			}
		});

		if (deleteIndex !== undefined) {
			this.animationList.splice(deleteIndex);
		}
	}

	pauseAnimation(id: number, func: (isPaused: boolean) => boolean): void {
		this.animationList.map((item) => {
			if (item.id === id) {
				item.animation.pause(func);

				return;
			}
		});
	}
}
