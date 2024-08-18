import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-display-media-grid-mob1-desk2',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './display-media-grid-mob1-desk2.component.html',
	styleUrl: './display-media-grid-mob1-desk2.component.scss',
})
export class DisplayMediaGridMob1Desk2Component {
	@Input('image-sources') imageSources: string[] = [];
}
