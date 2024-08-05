import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LetsTalkTitleComponent } from '../../components/lets-talk-title/lets-talk-title.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
	selector: 'app-contact-page',
	standalone: true,
	imports: [HeaderComponent, LetsTalkTitleComponent, FooterComponent],
	templateUrl: './contact-page.component.html',
	styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {}
