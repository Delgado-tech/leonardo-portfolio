import { Component } from '@angular/core';
import { projectsMockup } from '../../../../mocks/projects.mockup';
import { ButtonComponent } from '../../../button/button.component';
import { ProjectListComponent } from '../../../project-list/project-list.component';

@Component({
	selector: 'app-home-project-list',
	standalone: true,
	imports: [ButtonComponent, ProjectListComponent],
	templateUrl: './home-project-list.component.html',
	styleUrl: './home-project-list.component.scss',
})
export class HomeProjectListComponent {
	projectListCount: number = projectsMockup.length;
}
