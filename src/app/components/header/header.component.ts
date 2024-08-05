import { isPlatformBrowser } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	Input,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScrollObserverService } from '../../services/scroll-observer/scroll-observer.service';
import { preventAnimationWhenPageLoad } from '../../utils/preventAnimationWhenPageLoad';
import { socialLinksMockup } from '../../mocks/social-links.mockup';
import { TextLinkComponent } from '../text-link/text-link.component';
import { navbarLinkMockup } from '../../mocks/navbar-links.mockup';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, TextLinkComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	@Input('lightText') lightText: boolean = false;

	@ViewChild('header') headerRef!: ElementRef<HTMLElement>;

	social = socialLinksMockup;
	navbarLinks = navbarLinkMockup;

	showHamburgerMenu = false;
	isHamburgerMenuOpen = false;

	constructor(
		@Inject(PLATFORM_ID)
		private plataformId: any,
		private router: Router,
		private renderer: Renderer2,
		private scrollObserver: ScrollObserverService
	) {
		if (isPlatformBrowser(plataformId)) {
			this.renderer.listen('window', 'resize', (event: Event) => {
				const target = event.target as Window;
				if (target.innerWidth > 768 && !this.showHamburgerMenu) {
					this.renderer.removeStyle(document.body, 'overflow-y');
					this.isHamburgerMenuOpen = false;
				}
			});

			this.showHamburgerMenuWhenScroll(this.scrollObserver.getScrollPosition());
		}
	}

	ngAfterViewInit() {
		if (isPlatformBrowser(this.plataformId)) {
			preventAnimationWhenPageLoad(this.headerRef.nativeElement, 700);

			if (this.lightText)
				this.headerRef.nativeElement.classList.add('lightText');

			this.scrollObserver.registerObserver({
				HTMLElement: this.headerRef,
				handler: (props) => {
					this.showHamburgerMenuWhenScroll(props.scroll.scrollPosition);
				},
			});
		}
	}

	showHamburgerMenuWhenScroll(scrollPosition: number) {
		if (scrollPosition > 300 && !this.showHamburgerMenu) {
			this.showHamburgerMenu = true;
		} else if (scrollPosition <= 300 && this.showHamburgerMenu) {
			this.showHamburgerMenu = false;
		}
	}

	toggle() {
		this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;

		if (this.isHamburgerMenuOpen) {
			this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
		} else {
			this.renderer.removeStyle(document.body, 'overflow-y');
		}
	}

	isCurrentRouteLink(routeLink: string): string {
		if (this.router.url === routeLink) {
			return 'nav_item_selected';
		}

		return '';
	}
}
