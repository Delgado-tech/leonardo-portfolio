import { Component, Input } from '@angular/core';
import { ContentSliderComponent } from '../content-slider/content-slider.component';

@Component({
	selector: 'app-text-slider',
	standalone: true,
	imports: [ContentSliderComponent],
	templateUrl: './text-slider.component.html',
	styleUrl: './text-slider.component.scss',
})
export class TextSliderComponent {
	@Input('text-list') textList!: string[];
	@Input('icon-src') iconSrc!: string;
}
