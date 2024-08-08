import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { InputComponent } from '../../components/form/input/input.component';
import { TextareaComponent } from '../../components/form/textarea/textarea.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LetsTalkTitleComponent } from '../../components/lets-talk-title/lets-talk-title.component';
import { TextLinkComponent } from '../../components/text-link/text-link.component';
import { socialLinksMockup } from '../../mocks/social-links.mockup';
import { getFormalPhoneNumberFunc } from '../../utils/getFormalPhoneNumber';
import { RegexFunction } from '../../utils/regex';

@Component({
	selector: 'app-contact-page',
	standalone: true,
	imports: [
		HeaderComponent,
		LetsTalkTitleComponent,
		ButtonComponent,
		InputComponent,
		TextareaComponent,
		TextLinkComponent,
		FooterComponent,
	],
	templateUrl: './contact-page.component.html',
	styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
	regex = RegexFunction;
	social = socialLinksMockup;

	getFormalPhoneNumber = getFormalPhoneNumberFunc;

	onSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const formDataObj: any = {};

		formData.forEach((value, key) => (formDataObj[key] = value));
		const { name, email, phone, service, message } = formDataObj;
	}
}
