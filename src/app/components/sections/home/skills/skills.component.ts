import { Component } from '@angular/core';
import { technologyIconsMockup } from '../../../../mocks/technology-icons.mockup';
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

	technologyIcons = technologyIconsMockup;

	getIconURL(iconDir: string, iconName: string): string {
		return `url('${this.iconSrc
			.replace('?dir', iconDir)
			.replace('?icon', iconName)}');`;
	}
}
