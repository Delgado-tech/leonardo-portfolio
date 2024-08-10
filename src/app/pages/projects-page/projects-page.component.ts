import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ContactCallComponent } from '../../components/contact-call/contact-call.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { socialLinksMockup } from '../../mocks/social-links.mockup';

@Component({
	selector: 'app-projects-page',
	standalone: true,
	imports: [
		HeaderComponent,
		ButtonComponent,
		ProjectListComponent,
		ContactCallComponent,
	],
	templateUrl: './projects-page.component.html',
	styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
	githubLink = socialLinksMockup.github;
	redirect_icon = '../../../assets/icons/redirect-icon.svg';
}
