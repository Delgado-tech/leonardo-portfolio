import { Component } from '@angular/core';
import { replaceTraceFunc } from '../../../../utils/replaceTrace';
import { TooltipComponent } from '../../../tooltip/tooltip.component';
import { technologyIcons } from '../../../../mocks/technology-icons.mockup';

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

	replaceTrace: (text: string) => string = replaceTraceFunc;

	getIconURL(iconDir: string, iconName: string): string {
		return `url('${this.iconSrc
			.replace('?dir', iconDir)
			.replace('?icon', iconName)}');`;
	}
}
