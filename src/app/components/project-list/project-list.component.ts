import { isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	Input,
	PLATFORM_ID,
	Renderer2,
	signal,
	ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { IProjectMockupItem, ProjectMockup } from '../../mocks/projects.mockup';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'app-project-list',
	standalone: true,
	imports: [ButtonComponent],
	templateUrl: './project-list.component.html',
	styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
	@Input('show-table-headers') showTableHeaders: boolean = true;
	@Input('show-technologies') showTechnologies: boolean = true;
	@Input('show-only-highlight') showOnlyHighlight: boolean = true;
	@Input('section-title') sectionTitle?: string;

	@ViewChild('Banner') bannerContainerRef!: ElementRef<HTMLElement>;
	@ViewChild('BannerBtn') bannerBtnRef!: ElementRef<HTMLElement>;
	@ViewChild('Container') containerRef!: ElementRef<HTMLElement>;
	@ViewChild('Table') tableRef!: ElementRef<HTMLElement>;

	currentBannerIndex: number = 0;

	projectList = signal<IProjectMockupItem[]>([]);

	constructor(
		@Inject(PLATFORM_ID)
		private platform_id: any,
		private router: Router,
		private renderer: Renderer2
	) {
		this.projectList.set(this.getProjectList());
	}

	ngAfterViewInit(): void {
		if (isPlatformServer(this.platform_id)) return;

		this.projectList.set(this.getProjectList());

		const table = this.tableRef.nativeElement;
		const bannerContainer = this.bannerContainerRef.nativeElement;
		const bannerBtnContainer = this.bannerBtnRef.nativeElement;

		const followMouseCenter = (event: MouseEvent, element: HTMLElement) => {
			const [posX, posY] = [event.clientX, event.clientY];

			element.style.left = `${posX}px`;
			element.style.top = `${posY}px`;

			showBanner();
		};

		const showBanner = () => {
			hideBanner();
			bannerContainer.classList.add('project_banner_show');
			bannerBtnContainer.classList.add('project_banner_btn_show');
		};

		const hideBanner = () => {
			bannerContainer.classList.remove('project_banner_show');
			bannerBtnContainer.classList.remove('project_banner_btn_show');
		};

		const onMouseEnter = (event: MouseEvent) => {
			followMouseCenter(event, bannerContainer);
			followMouseCenter(event, bannerBtnContainer);
		};

		const onMouseMove = (event: MouseEvent) => {
			followMouseCenter(event, bannerContainer);
			followMouseCenter(event, bannerBtnContainer);
		};

		const onMouseOver = (event: MouseEvent) => {
			const table = this.tableRef.nativeElement;
			const tbody = table.children[1];

			const target = (event.target as HTMLElement).parentElement;

			const nodes = Array.prototype.slice.call(tbody.children);
			const bannerIndex = nodes.indexOf(target);

			if (bannerIndex === -1) return;
			if (this.currentBannerIndex === bannerIndex) return;
			this.currentBannerIndex = bannerIndex;

			const banner = bannerContainer.children[bannerIndex] as HTMLElement;
			showBanner();

			bannerContainer.scrollTo({
				top: banner.offsetTop,
			});
		};

		const onMouseLeave = () => {
			hideBanner();
		};

		const onResize = () => {
			this.toggleDevToolsClass();
		};

		this.toggleDevToolsClass();

		this.renderer.listen(table, 'mouseenter', onMouseEnter);
		this.renderer.listen(table, 'mousemove', onMouseMove);
		this.renderer.listen(table, 'mouseover', onMouseOver);
		this.renderer.listen(table, 'mouseleave', onMouseLeave);
		this.renderer.listen(window, 'resize', onResize);
	}

	toggleDevToolsClass(): void {
		const container = this.containerRef.nativeElement;
		container.classList.remove('devtools_open');

		if (window.outerWidth - window.innerWidth > 100) {
			container.classList.add('devtools_open');
		}
	}

	getProjectList(): IProjectMockupItem[] {
		return ProjectMockup.data
			.filter((p) => {
				if (this.showOnlyHighlight === true) {
					if (p.highlight === true) {
						return true;
					}

					return false;
				}

				return true;
			})
			.sort((a, b) => {
				// ordernar por ano (decrescente)
				return b.createdDate.getFullYear() - a.createdDate.getFullYear();
			});
	}

	redirectToProjectPage(routeLink: string) {
		this.router.navigate([routeLink]);
	}
}
