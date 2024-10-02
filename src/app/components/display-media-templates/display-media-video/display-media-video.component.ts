import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-display-media-video',
	standalone: true,
	imports: [],
	templateUrl: './display-media-video.component.html',
	styleUrl: './display-media-video.component.scss',
})
export class DisplayMediaVideoComponent {
	@Input('video-source') videoSource: string = '';
}
