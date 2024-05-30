import { isPlatformBrowser } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	PLATFORM_ID,
	ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterComponent } from '../../components/character/character.component';
import { TextSliderComponent } from '../../components/text-slider/text-slider.component';
import { preventAnimationWhenPageLoad } from '../../utils/preventAnimationWhenPageLoad';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [TextSliderComponent, CharacterComponent, RouterLink],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	img_star: string = '../../../assets/shapes/star.svg';
	hamMenu = true;
	hamMenuActive = true;

	@ViewChild('header') headerRef!: ElementRef<HTMLElement>;

	toggle() {
		this.hamMenuActive = !this.hamMenuActive;
	}

	constructor(
		@Inject(PLATFORM_ID)
		private platformId: any
	) {}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId)) {
			preventAnimationWhenPageLoad(this.headerRef.nativeElement, 700);
		}
	}
}
