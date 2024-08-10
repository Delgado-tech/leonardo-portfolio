import { Component } from '@angular/core';
import { socialLinksMockup } from '../../../../mocks/social-links.mockup';
import { getFormalPhoneNumberFunc } from '../../../../utils/getFormalPhoneNumber';
import { RegexFunction } from '../../../../utils/regex';
import { ButtonComponent } from '../../../button/button.component';
import { InputComponent } from '../../../form/input/input.component';
import { TextareaComponent } from '../../../form/textarea/textarea.component';
import { LetsTalkTitleComponent } from '../../../lets-talk-title/lets-talk-title.component';
import { TextLinkComponent } from '../../../text-link/text-link.component';

@Component({
	selector: 'app-contact-form',
	standalone: true,
	imports: [
		LetsTalkTitleComponent,
		ButtonComponent,
		InputComponent,
		TextareaComponent,
		TextLinkComponent,
	],
	templateUrl: './contact-form.component.html',
	styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
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
