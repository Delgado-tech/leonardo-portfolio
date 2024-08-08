import { Component } from '@angular/core';
import { socialLinksMockup } from '../../mocks/social-links.mockup';
import { getFormalPhoneNumberFunc } from '../../utils/getFormalPhoneNumber';
import { FooterComponent } from '../footer/footer.component';
import { LetsTalkTitleComponent } from '../lets-talk-title/lets-talk-title.component';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';

@Component({
	selector: 'app-contact-call',
	standalone: true,
	imports: [RedirectButtonComponent, LetsTalkTitleComponent, FooterComponent],
	templateUrl: './contact-call.component.html',
	styleUrl: './contact-call.component.scss',
})
export class ContactCallComponent {
	social = socialLinksMockup;
	getFormalPhoneNumber = getFormalPhoneNumberFunc;
}
