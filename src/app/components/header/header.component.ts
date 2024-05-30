import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	isHamburgerMenuVisible = false;
	isHamburgerMenuOpen = false;

	constructor(
		@Inject(PLATFORM_ID)
		private plataformId: any
	) {
		if (isPlatformBrowser(plataformId)) {
		}
	}
}
