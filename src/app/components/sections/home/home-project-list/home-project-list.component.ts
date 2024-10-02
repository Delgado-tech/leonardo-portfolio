import { Component } from '@angular/core';
import { ProjectPageRedirectButtonComponent } from '../../../button-templates/project-page-redirect-button/project-page-redirect-button.component';
import { ButtonComponent } from '../../../button/button.component';
import { ProjectListComponent } from '../../../project-list/project-list.component';

@Component({
	selector: 'app-home-project-list',
	standalone: true,
	imports: [
		ButtonComponent,
		ProjectListComponent,
		ProjectPageRedirectButtonComponent,
	],
	templateUrl: './home-project-list.component.html',
	styleUrl: './home-project-list.component.scss',
})
export class HomeProjectListComponent {}
