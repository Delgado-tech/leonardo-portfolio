import { isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { projectsMockup } from '../../mocks/projects.mockup';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';

@Component({
	selector: 'app-project-list',
	standalone: true,
	imports: [RedirectButtonComponent],
	templateUrl: './project-list.component.html',
	styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
	@ViewChild('Banner') bannerContainerRef!: ElementRef<HTMLElement>;
	@ViewChild('Container') containerRef!: ElementRef<HTMLElement>;
	@ViewChild('Table') tableRef!: ElementRef<HTMLElement>;

	currentBannerIndex: number = 0;
	projectList = projectsMockup
		.filter((p) => p.highlight === true)
		.sort((a, b) => {
			// ordernar por ano (decrescente)
			return b.createdDate.getFullYear() - a.createdDate.getFullYear();
		});

	constructor(
		@Inject(PLATFORM_ID)
		private platform_id: any,
		private renderer: Renderer2
	) {}

	ngAfterViewInit(): void {
		if (isPlatformServer(this.platform_id)) return;

		const table = this.tableRef.nativeElement;

		const setBannerInMouseCenter = (event: MouseEvent) => {
			const bannerContainer = this.bannerContainerRef.nativeElement;
			const [posX, posY] = [event.clientX, event.clientY];

			bannerContainer.style.left = `${posX}px`;
			bannerContainer.style.top = `${posY}px`;

			bannerContainer.classList.remove('project_banner_show');
			bannerContainer.classList.add('project_banner_show');
		};

		const showBanner = () => {
			const bannerContainer = this.bannerContainerRef.nativeElement;
			bannerContainer.classList.remove('project_banner_show');
			bannerContainer.classList.add('project_banner_show');
		};

		const hideBanner = () => {
			const bannerContainer = this.bannerContainerRef.nativeElement;
			bannerContainer.classList.remove('project_banner_show');
		};

		const onMouseEnter = (event: MouseEvent) => {
			setBannerInMouseCenter(event);
		};

		const onMouseMove = (event: MouseEvent) => {
			setBannerInMouseCenter(event);
		};

		const onMouseOver = (event: MouseEvent) => {
			const bannerContainer = this.bannerContainerRef.nativeElement;
			const table = this.tableRef.nativeElement;
			const tbody = table.children[0];

			const target = (event.target as HTMLElement).offsetParent as HTMLElement;

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

		this.renderer.listen(table, 'mouseenter', onMouseEnter);
		this.renderer.listen(table, 'mousemove', onMouseMove);
		this.renderer.listen(table, 'mouseover', onMouseOver);
		this.renderer.listen(table, 'mouseleave', onMouseLeave);
	}
}
