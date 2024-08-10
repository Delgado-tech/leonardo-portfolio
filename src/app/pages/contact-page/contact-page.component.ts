import { Component } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ContactFormComponent } from '../../components/sections/contact-page/contact-form/contact-form.component';

@Component({
	selector: 'app-contact-page',
	standalone: true,
	imports: [HeaderComponent, ContactFormComponent, FooterComponent],
	templateUrl: './contact-page.component.html',
	styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {}
