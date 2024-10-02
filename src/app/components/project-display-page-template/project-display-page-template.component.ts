import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProjectMockupItem, ProjectMockup } from '../../mocks/projects.mockup';
import { ProjectPageRedirectButtonComponent } from '../button-templates/project-page-redirect-button/project-page-redirect-button.component';
import { ButtonComponent } from '../button/button.component';
import { DisplayMediaBannerOverlayComponent } from '../display-media-templates/display-media-banner-overlay/display-media-banner-overlay.component';
import { DisplayMediaGridMob1Desk2Component } from '../display-media-templates/display-media-grid-mob1-desk2/display-media-grid-mob1-desk2.component';
import { DisplayMediaGridMob3Component } from '../display-media-templates/display-media-grid-mob3/display-media-grid-mob3.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'app-project-display-page-template',
	standalone: true,
	imports: [
		HeaderComponent,
		ButtonComponent,
		FooterComponent,
		DisplayMediaGridMob3Component,
		DisplayMediaGridMob1Desk2Component,
		DisplayMediaBannerOverlayComponent,
		ProjectPageRedirectButtonComponent,
		RouterLink,
	],
	templateUrl: './project-display-page-template.component.html',
	styleUrl: './project-display-page-template.component.scss',
})
export class ProjectDisplayPageTemplateComponent {
	@Input('project-id') projectId!: number;

	@ViewChild('MediaContainer') mediaContainerRef!: ElementRef<HTMLElement>;

	project?: IProjectMockupItem;
	nextProject?: IProjectMockupItem;

	redirect_icon: string = '../../../assets/icons/common/redirect-icon.svg';
	github_icon: string = '../../../assets/icons/common/github.svg';

	ngOnInit() {
		this.project = ProjectMockup.getProjectById(this.projectId);
		this.nextProject = ProjectMockup.getNextProject(this.project);
	}

	ngAfterViewInit() {
		const mediaWrapper = this.mediaContainerRef.nativeElement
			.firstChild as HTMLElement;
		mediaWrapper.classList.add('media_wrapper');
	}
}
