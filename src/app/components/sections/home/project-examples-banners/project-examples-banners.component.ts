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
	bannerSliders: IBannerSliderContent[] = [
		{
			slides: ['', '', '', '', ''],
			reverse: false,
		},
		{
			slides: ['', '', '', '', ''],
			reverse: true,
		},
		{
			slides: ['', '', '', '', ''],
			reverse: false,
		},
		{
			slides: ['', '', '', '', ''],
			reverse: true,
		},
	];
}
