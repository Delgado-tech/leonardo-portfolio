import { Component } from '@angular/core';

import { ProjectMockup } from '../../../mocks/projects.mockup';
import { ButtonComponent } from '../../button/button.component';

@Component({
	selector: 'app-project-page-redirect-button',
	standalone: true,
	imports: [ButtonComponent],
	templateUrl: './project-page-redirect-button.component.html',
	styleUrl: './project-page-redirect-button.component.scss',
})
export class ProjectPageRedirectButtonComponent {
	projectListCount: number = ProjectMockup.data.length;
}
