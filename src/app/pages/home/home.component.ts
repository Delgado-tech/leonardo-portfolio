import { Component } from '@angular/core';
import { TextSliderComponent } from '../../components/text-slider/text-slider.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [TextSliderComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	img_star: string = '../../../assets/shapes/star.svg';
}
