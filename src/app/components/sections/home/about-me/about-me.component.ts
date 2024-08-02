import { Component } from '@angular/core';
import { CvRedirectButtonComponent } from '../../../cv-redirect-button/cv-redirect-button.component';

@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [CvRedirectButtonComponent],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
