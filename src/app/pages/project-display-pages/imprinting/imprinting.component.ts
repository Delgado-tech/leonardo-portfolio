import { Component } from '@angular/core';
import { DisplayMediaBannerOverlayComponent } from '../../../components/display-media-templates/display-media-banner-overlay/display-media-banner-overlay.component';
import { DisplayMediaGridMob1Desk2Component } from '../../../components/display-media-templates/display-media-grid-mob1-desk2/display-media-grid-mob1-desk2.component';
import { DisplayMediaGridMob3Component } from '../../../components/display-media-templates/display-media-grid-mob3/display-media-grid-mob3.component';
import { DisplayMediaVideoComponent } from '../../../components/display-media-templates/display-media-video/display-media-video.component';
import { ProjectDisplayPageTemplateComponent } from '../../../components/project-display-page-template/project-display-page-template.component';
import { EnumProjectID } from '../../../mocks/projects.mockup';
import { ProjectDisplayPageModel } from '../project-display-pages.model';

@Component({
	selector: 'app-imprinting',
	standalone: true,
	imports: [
		ProjectDisplayPageTemplateComponent,
		DisplayMediaBannerOverlayComponent,
		DisplayMediaGridMob3Component,
		DisplayMediaGridMob1Desk2Component,
		DisplayMediaVideoComponent,
	],
	templateUrl: './imprinting.component.html',
	styleUrl: './imprinting.component.scss',
})
export class ImprintingComponent extends ProjectDisplayPageModel {
	projectId: number = EnumProjectID.imprinting;

	readonly assetsDir = '../../../../assets/project-display-pages/imprinting';

	getAssetUrl(assetName: string): string {
		return `${this.assetsDir}/${assetName}`;
	}
}
