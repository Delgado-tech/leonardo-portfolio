import { Component } from '@angular/core';
import { TextLinkComponent } from '../text-link/text-link.component';
import { socialLinksMockup } from '../../mocks/social-links.mockup';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [TextLinkComponent],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	social = socialLinksMockup;
}
