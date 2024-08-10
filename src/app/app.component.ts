import { isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { isMobileAgent as isMobileAgentCheck } from './utils/isMobileAgent';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, HomeComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	@ViewChild('Container') containerRef!: ElementRef<HTMLElement>;

	title = 'Portfolio';

	isMobileAgent: boolean = false;

	constructor(
		@Inject(PLATFORM_ID)
		private plataform_id: any,
		private router: Router,
		private renderer: Renderer2
	) {}

	ngAfterViewInit(): void {
		if (isPlatformServer(this.plataform_id)) return;

		this.isMobileAgent = isMobileAgentCheck();

		if (this.isMobileAgent) {
			this.containerRef.nativeElement.classList.add('mobile_agent');
		}

		this.renderer.listen('window', 'resize', () => {
			if (isMobileAgentCheck() && !this.isMobileAgent) {
				this.containerRef.nativeElement.classList.remove('mobile_agent');
				this.containerRef.nativeElement.classList.add('mobile_agent');
			} else if (!isMobileAgentCheck() && this.isMobileAgent) {
				this.containerRef.nativeElement.classList.remove('mobile_agent');
			}

			this.isMobileAgent = isMobileAgentCheck();
		});

		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				window.scrollTo({ top: 0 });
				this.renderer.removeStyle(document.body, 'overflow-y');
			}
		});
	}
}
