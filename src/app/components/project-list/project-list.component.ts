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

		this.renderer.listen(
			this.containerRef.nativeElement,
			'mousemove',
			(event: MouseEvent) => {
				const bannerContainer = this.bannerContainerRef.nativeElement;
				const table = this.tableRef.nativeElement;
				const tbody = table.children[0];
				const [posX, posY] = [event.pageX, event.pageY];
				const target = (event.target as HTMLElement)
					.offsetParent as HTMLElement;

				if (table.contains(target)) {
					bannerContainer.style.left = `${posX}px`;
					bannerContainer.style.top = `${posY}px`;

					bannerContainer.classList.add('project_banner_show');

					const bannerIndex = Array.prototype.indexOf.call(
						tbody.children,
						target
					);

					if (this.currentBannerIndex === bannerIndex) return;
					this.currentBannerIndex = bannerIndex;

					const banner = bannerContainer.children[bannerIndex] as HTMLElement;

					bannerContainer.scrollTo({
						top: banner.offsetTop,
					});

					return;
				}

				bannerContainer.classList.remove('project_banner_show');
			}
		);
	}
}
