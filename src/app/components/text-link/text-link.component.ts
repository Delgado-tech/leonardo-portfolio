import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-text-link',
	standalone: true,
	imports: [],
	templateUrl: './text-link.component.html',
	styleUrl: './text-link.component.scss',
})
export class TextLinkComponent {
	@Input('href') href: string = '#';
}
