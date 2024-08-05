import { Component } from '@angular/core';
import { socialLinksMockup } from '../../mocks/social-links.mockup';
import { ButtonComponent } from '../button/button.component';
import { TextLinkComponent } from '../text-link/text-link.component';
import { LetsTalkTitleComponent } from '../lets-talk-title/lets-talk-title.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
	selector: 'app-contact-call',
	standalone: true,
	imports: [ButtonComponent, LetsTalkTitleComponent, FooterComponent],
	templateUrl: './contact-call.component.html',
	styleUrl: './contact-call.component.scss',
})
export class ContactCallComponent {
	social = socialLinksMockup;

	getFormalPhoneNumber(): string {
		let result: string;

		result = this.social.phone.ddd + ' ';
		result += this.social.phone.number.slice(0, 5) + '-';
		result += this.social.phone.number.slice(5);

		return result;
	}
}
