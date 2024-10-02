import { Component } from '@angular/core';
import { DisplayMediaBannerOverlayComponent } from '../../../components/display-media-templates/display-media-banner-overlay/display-media-banner-overlay.component';
import { DisplayMediaGridMob3Component } from '../../../components/display-media-templates/display-media-grid-mob3/display-media-grid-mob3.component';
import { ProjectDisplayPageTemplateComponent } from '../../../components/project-display-page-template/project-display-page-template.component';
import { EnumProjectID } from '../../../mocks/projects.mockup';
import { ProjectDisplayPageModel } from '../project-display-pages.model';

@Component({
	selector: 'app-multiply-me-page',
	standalone: true,
	imports: [
		ProjectDisplayPageTemplateComponent,
		DisplayMediaBannerOverlayComponent,
		DisplayMediaGridMob3Component,
	],
	templateUrl: './multiply-me-page.component.html',
	styleUrl: './multiply-me-page.component.scss',
})
export class MultiplyMePageComponent extends ProjectDisplayPageModel {
	projectId: number = EnumProjectID.multiplyme;

	readonly assetsDir = '../../../../assets/project-display-pages/multiply-me';

	getAssetUrl(assetName: string): string {
		return `${this.assetsDir}/${assetName}`;
	}
}
