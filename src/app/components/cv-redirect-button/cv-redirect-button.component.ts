import { Component } from '@angular/core';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';

@Component({
	selector: 'app-cv-redirect-button',
	standalone: true,
	imports: [RedirectButtonComponent],
	templateUrl: './cv-redirect-button.component.html',
	styleUrl: './cv-redirect-button.component.scss',
})
export class CvRedirectButtonComponent {
	icon_redirect: string = '../../../assets/icons/redirect-icon.svg';
	cvLink: string = '/assets/docs/leonardo-curriculo.pdf';
}
