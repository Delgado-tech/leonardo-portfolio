import { Component } from '@angular/core';
import { ButtonComponent } from '../../../button/button.component';
import { CharacterComponent } from '../../../character/character.component';
import { CvRedirectButtonComponent } from '../../../cv-redirect-button/cv-redirect-button.component';
import { TextSliderComponent } from '../../../text-slider/text-slider.component';

@Component({
	selector: 'app-home-introduction',
	standalone: true,
	imports: [
		TextSliderComponent,
		CharacterComponent,
		ButtonComponent,
		CvRedirectButtonComponent,
	],
	templateUrl: './home-introduction.component.html',
	styleUrl: './home-introduction.component.scss',
})
export class HomeIntroductionComponent {
	icon_star: string = '../../../../../assets/shapes/star.svg';
}
