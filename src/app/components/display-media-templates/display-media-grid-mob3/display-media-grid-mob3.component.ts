import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-display-media-grid-mob3',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './display-media-grid-mob3.component.html',
	styleUrl: './display-media-grid-mob3.component.scss',
})
export class DisplayMediaGridMob3Component {
	@Input('image-sources') imageSources: string[] = [];
}
