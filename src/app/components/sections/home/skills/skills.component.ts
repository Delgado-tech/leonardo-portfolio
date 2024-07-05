import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { technologyIcons } from '../../../../mocks/technology-icons.mockup';
import { TooltipComponent } from '../../../tooltip/tooltip.component';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [TooltipComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	private iconSrc: string =
		'../../../../../assets/icons/technologies/?dir/?icon.svg';

	technologyIcons = technologyIcons;

	constructor(private sanitizer: DomSanitizer) {}

	getIconURL(iconDir: string, iconName: string): string {
		return `url('${this.iconSrc
			.replace('?dir', iconDir)
			.replace('?icon', iconName)}');`;
	}

	getTooltipContent(title: string, subtitle: string, info?: string) {
		/*html*/
		const html = `
				<div style="display: flex; flex-direction: column; gap: 16px; min-width: 200px">
					<div style="display: flex; flex-direction: column; gap: 4px;">
						<span style="font-weight: 500;">?title</span>
						<span style="color: gray">?subtitle</span>
					</div>
					${info === undefined ? '' : `<p style="color: #BBBBBB">${info}</p>`}
				</div>
			`
			.replace('?title', title)
			.replace('?subtitle', subtitle);

		return this.sanitizer.bypassSecurityTrustHtml(html);
	}
}
