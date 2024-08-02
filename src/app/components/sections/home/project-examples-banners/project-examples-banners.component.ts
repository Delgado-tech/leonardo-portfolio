import { Component } from '@angular/core';
import { ContentSliderComponent } from '../../../content-slider/content-slider.component';

interface IBannerSliderContent {
	slides: string[];
	reverse: boolean;
}

@Component({
	selector: 'app-project-examples-banners',
	standalone: true,
	imports: [ContentSliderComponent],
	templateUrl: './project-examples-banners.component.html',
	styleUrl: './project-examples-banners.component.scss',
})
export class ProjectExamplesBannersComponent {
	bannersPath: string = '../../../../../assets/project-examples-banners';

	bannerSliders: IBannerSliderContent[] = [
		{
			slides: [
				'tenshoes.png',
				'techtrends.png',
				'powerfit.png',
				'english_elevate.png',
				'portfolio_maria.png',
				'pettzjoin.png',
			],
			reverse: false,
		},
		{
			slides: [
				'jollies.png',
				'sabrasa.png',
				'portfolio_felipe.png',
				'concimotors.png',
				'beaute.png',
				'maisons.png',
			],
			reverse: true,
		},
		{
			slides: [
				'pettzjoin.png',
				'portfolio_maria.png',
				'english_elevate.png',
				'powerfit.png',
				'techtrends.png',
				'tenshoes.png',
			],
			reverse: false,
		},
		{
			slides: [
				'maisons.png',
				'beaute.png',
				'concimotors.png',
				'portfolio_felipe.png',
				'sabrasa.png',
				'jollies.png',
			],
			reverse: true,
		},
	];

	getSlideURL(slideName: string): string {
		if (slideName === '') {
			return slideName;
		}

		return `url('${this.bannersPath}/${slideName}');`;
	}
}
