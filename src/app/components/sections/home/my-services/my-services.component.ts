import { Component } from '@angular/core';
import { RedirectButtonComponent } from '../../../redirect-button/redirect-button.component';

interface IServiceContent {
	iconName: string;
	title: string;
	description: string;
}

@Component({
	selector: 'app-my-services',
	standalone: true,
	imports: [RedirectButtonComponent],
	templateUrl: './my-services.component.html',
	styleUrl: './my-services.component.scss',
})
export class MyServicesComponent {
	iconPath = '../../../../../assets/icons/common/???.svg';

	services: IServiceContent[] = [
		{
			iconName: 'computer',
			title: 'Desenvolvimento Web',
			description:
				'Criação de sites modernos e responsivos, otimizados para uma experiência de usuário fluida e acessível.',
		},
		{
			iconName: 'palette',
			title: 'Design Gráfico',
			description:
				'Criação de logomarcas, banners, protótipos, wireframes de sites e outros elementos visuais.',
		},
		{
			iconName: 'marketing',
			title: 'Marketing Digital',
			description:
				'Gerenciamento de campanhas de anúncios e criação de conteúdo estratégico para ampliar sua presença online.',
		},
	];

	getIconURL(iconName: string): string {
		return this.iconPath.replace('???', iconName);
	}
}
