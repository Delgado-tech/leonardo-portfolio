import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { isPlatformServer, ViewportScroller } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HomeComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'Portfolio';

	constructor(
		@Inject(PLATFORM_ID)
		private plataform_id: any,
		private router: Router,
		private renderer: Renderer2
	) {}

	ngAfterViewInit(): void {
		if (isPlatformServer(this.plataform_id)) return;

		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				window.scrollTo({ top: 0 });
				this.renderer.removeStyle(document.body, 'overflow-y');
			}
		});
	}
}
