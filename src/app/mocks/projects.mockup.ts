interface IProject {
	title: string;
	description: string;
	createdDate: Date;
	bannerFileName: string;
	projectLink?: string;
	repositoryLink?: string;
}

export const projects: IProject[] = [
	{
		title: 'Multiply Me',
		description: '',
		createdDate: new Date(2023, 6, 6),
		bannerFileName: 'multiplyme.jpeg',
		projectLink: 'https://delgatech-multiply-me.netlify.app/index.html',
		repositoryLink: 'https://github.com/Delgado-tech/multiply-me-game',
	},
	{
		title: 'Imprinting',
		description: '',
		createdDate: new Date(2024, 3, 7),
		bannerFileName: 'imprinting.jpeg',
		repositoryLink: 'https://github.com/Delgado-tech/imprinting-landing-page',
	},
	{
		title: 'Admin Painel',
		description: '',
		createdDate: new Date(2023, 11, 19),
		bannerFileName: 'controle_de_estoque.png',
		repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
	},
	{
		title: 'Meowtfolio',
		description: '',
		createdDate: new Date(2023, 7, 25),
		bannerFileName: 'meowtfolio.jpeg',
		projectLink: 'https://meowtfolio.vercel.app/',
		repositoryLink: 'https://github.com/Delgado-tech/portfolio-meow',
	},
	{
		title: 'Finance.io',
		description: '',
		createdDate: new Date(2024, 1, 12),
		bannerFileName: 'financeio.jpeg',
		repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
	},
];
