export enum EnumProjectID {
	multiplyme,
	imprinting,
	adminpanel,
	meowtfolio,
	financeio,
	asse,
}

export interface IProjectMockupItem {
	id: EnumProjectID;
	title: string;
	description: string;
	createdDate: Date;
	bannerFileName: string;
	projectPageRouteLink: string;
	technologies?: string[];
	contributors?: string[];
	projectLink?: string;
	repositoryLink?: string;
	highlight?: boolean;
}

export class ProjectMockup {
	private static readonly rootRoute = '/projetos';

	static readonly data: IProjectMockupItem[] = [
		{
			id: EnumProjectID.multiplyme,
			title: 'Multiply Me',
			description: `O site consiste em um jogo de matemática onde ajuda os usuários a treinarem multiplicação e pensamento rápido, a interface foi baseada no Duolingo, bem como as animações.`,
			createdDate: new Date(2023, 6, 6),
			bannerFileName: 'multiplyme.jpeg',
			projectLink: 'https://delgatech-multiply-me.netlify.app/index.html',
			repositoryLink: 'https://github.com/Delgado-tech/multiply-me-game',
			technologies: ['Javascript', 'CSS', 'Figma', 'Netlify'],
			highlight: true,
			projectPageRouteLink: `${this.rootRoute}/multiply-me`,
		},
		{
			id: EnumProjectID.imprinting,
			title: 'Imprinting',
			description: `Um site para captação de novos clientes para a empresa Imprinting, com navegação entre páginas, animações e formulário de interesse com prevenção de spam.`,
			createdDate: new Date(2024, 3, 7),
			bannerFileName: 'imprinting.jpeg',
			repositoryLink: 'https://github.com/Delgado-tech/imprinting-landing-page',
			technologies: [
				'React (Vite)',
				'Typescript',
				'TailwindCSS',
				'Framer Motion',
				'EmailJs',
				'Figma',
				'Vercel',
			],
			contributors: ['Felipe Destro', 'João Braga'],
			highlight: true,
			projectPageRouteLink: `${this.rootRoute}/imprinting`,
		},
		{
			id: EnumProjectID.adminpanel,
			title: 'Admin Painel',
			description: `O site consiste em um painel administrativo, onde os gestores podem controlar o cadastro dos usuários e do inventário de produtos de sua marca.`,
			createdDate: new Date(2023, 11, 19),
			bannerFileName: 'controle_de_estoque.png',
			repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
			technologies: [
				'React (Next.js)',
				'Typescript',
				'TailwindCSS',
				'Express',
				'MySQL',
				'Figma',
				'Vercel',
			],
			highlight: true,
			projectPageRouteLink: `${this.rootRoute}/admin-panel`,
		},
		{
			id: EnumProjectID.meowtfolio,
			title: 'Meowtfolio',
			description: `Um modelo de portfólio elaborado para ser vendido como template.`,
			createdDate: new Date(2023, 7, 25),
			bannerFileName: 'meowtfolio.jpeg',
			projectLink: 'https://meowtfolio.vercel.app/',
			repositoryLink: 'https://github.com/Delgado-tech/portfolio-meow',
			technologies: [
				'React (Vite)',
				'Javascript',
				'Styled Components',
				'Figma',
				'Vercel',
			],
			highlight: true,
			projectPageRouteLink: `${this.rootRoute}/meowtfolio`,
		},
		{
			id: EnumProjectID.financeio,
			title: 'Finance.io',
			description: `Um dashboard administrativo para análise de despesas, com funcionalidades para registrar receitas, despesas, definir metas e muito mais. Inclui gráficos informativos para facilitar o entendimento dos dados.`,
			createdDate: new Date(2024, 1, 12),
			bannerFileName: 'financeio.jpeg',
			repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
			technologies: [
				'React (Next.js)',
				'Typescript',
				'TailwindCSS',
				'ApexCharts',
				'Express',
				'Prisma',
				'Jest',
				'JsonWebToken',
				'PostgreSQL',
				'Figma',
				'Vercel',
			],
			highlight: true,
			projectPageRouteLink: `${this.rootRoute}/finance-io`,
		},
		{
			id: EnumProjectID.asse,
			title: 'asse',
			description: `Um dashboard administrativo para análise de despesas, com funcionalidades para registrar receitas, despesas, definir metas e muito mais. Inclui gráficos informativos para facilitar o entendimento dos dados.`,
			createdDate: new Date(2014, 1, 12),
			bannerFileName: 'financeio.jpeg',
			repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
			technologies: ['React (Next.js)', 'Typescript'],
			projectPageRouteLink: `${this.rootRoute}/asse`,
		},
	];

	static getProjectById(id: EnumProjectID): IProjectMockupItem {
		return ProjectMockup.data.find((p) => p.id === id)!;
	}

	static getNextProject(
		currentProject: IProjectMockupItem
	): IProjectMockupItem {
		let nextId = currentProject.id + 1;
		if (nextId >= ProjectMockup.data.length) {
			nextId = 0;
		}

		return ProjectMockup.data.find((p) => p.id === nextId)!;
	}
}
