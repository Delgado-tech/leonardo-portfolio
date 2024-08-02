import { Component } from '@angular/core';
import { socialLinks } from '../../utils/socialLinks';
import { ButtonComponent } from '../button/button.component';
import { TextLinkComponent } from '../text-link/text-link.component';

@Component({
	selector: 'app-contact-footer',
	standalone: true,
	imports: [ButtonComponent, TextLinkComponent],
	templateUrl: './contact-footer.component.html',
	styleUrl: './contact-footer.component.scss',
})
export class ContactFooterComponent {
	social = socialLinks;

	getFormalPhoneNumber(): string {
		let result: string;

		result = this.social.phone.ddd + ' ';
		result += this.social.phone.number.slice(0, 5) + '-';
		result += this.social.phone.number.slice(5);

		return result;
	}
}
