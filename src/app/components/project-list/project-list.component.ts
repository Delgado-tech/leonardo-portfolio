import { isPlatformServer } from '@angular/common';
import {
	Component,
	ElementRef,
	Inject,
	PLATFORM_ID,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { projects } from '../../mocks/projects.mockup';

@Component({
	selector: 'app-project-list',
	standalone: true,
	imports: [],
	templateUrl: './project-list.component.html',
	styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
	@ViewChild('Banner') bannerContainerRef!: ElementRef<HTMLElement>;
	@ViewChild('Container') containerRef!: ElementRef<HTMLElement>;
	@ViewChild('Table') tableRef!: ElementRef<HTMLElement>;

	currentBannerIndex: number = 0;
	projectList = projects.sort((a, b) => {
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

		this.renderer.listen(table, 'mouseenter', this.onMouseEnter);
		this.renderer.listen(table, 'mousemove', this.onMouseMove);
		this.renderer.listen(table, 'mouseover', this.onMouseOver);
		this.renderer.listen(table, 'mouseleave', this.onMouseLeave);
	}

	setBannerInMouseCenter = (event: MouseEvent) => {
		const bannerContainer = this.bannerContainerRef.nativeElement;
		const [posX, posY] = [event.clientX, event.clientY];

		bannerContainer.style.left = `${posX}px`;
		bannerContainer.style.top = `${posY}px`;

		bannerContainer.classList.remove('project_banner_show');
		bannerContainer.classList.add('project_banner_show');
	};

	showBanner = () => {
		const bannerContainer = this.bannerContainerRef.nativeElement;
		bannerContainer.classList.remove('project_banner_show');
		bannerContainer.classList.add('project_banner_show');
	};

	hideBanner = () => {
		const bannerContainer = this.bannerContainerRef.nativeElement;
		bannerContainer.classList.remove('project_banner_show');
	};

	onMouseEnter = (event: MouseEvent) => {
		this.setBannerInMouseCenter(event);
	};

	onMouseMove = (event: MouseEvent) => {
		this.setBannerInMouseCenter(event);
	};

	onMouseOver = (event: MouseEvent) => {
		const bannerContainer = this.bannerContainerRef.nativeElement;
		const table = this.tableRef.nativeElement;
		const tbody = table.children[0];

		const target = (event.target as HTMLElement).offsetParent as HTMLElement;

		const bannerIndex = Array.prototype.indexOf.call(tbody.children, target);

		if (this.currentBannerIndex === bannerIndex) return;
		this.currentBannerIndex = bannerIndex;

		const banner = bannerContainer.children[bannerIndex] as HTMLElement;

		this.showBanner();

		bannerContainer.scrollTo({
			top: banner.offsetTop,
		});
	};

	onMouseLeave = () => {
		this.hideBanner();
	};
}
