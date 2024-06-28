import { Component } from '@angular/core';
import iconFileList from '../../../../../assets/icons/technology-icons-file-list/file-list.json';
import { replaceTraceFunc } from '../../../../utils/replaceTrace';
import { TooltipComponent } from '../../../tooltip/tooltip.component';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [TooltipComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.scss',
})
export class SkillsComponent {
	private iconsSrc: string =
		'../../../../../assets/icons/technologies/?dir/?icon.svg';

	icons = iconFileList;

	replaceTrace: (text: string) => string = replaceTraceFunc;

	getIconURL(iconDir: string, iconName: string): string {
		return `url('${this.iconsSrc
			.replace('?dir', iconDir)
			.replace('?icon', iconName)}');`;
	}
}
