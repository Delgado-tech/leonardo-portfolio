import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { socialLinksMockup } from '../../mocks/social-links.mockup';
import { TextLinkComponent } from '../text-link/text-link.component';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [TextLinkComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	@Input('hide-social-medias') hideSocialMedias: boolean = false;

	@ViewChild('SocialMedias') socialMediasRef!: ElementRef<HTMLElement>;

	social = socialLinksMockup;

	ngAfterViewInit() {
		const socialMediasEl = this.socialMediasRef.nativeElement;

		socialMediasEl.classList.remove('hide');

		if (this.hideSocialMedias) {
			socialMediasEl.classList.add('hide');
		}
	}
}
