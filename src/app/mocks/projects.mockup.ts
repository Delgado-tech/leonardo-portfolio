interface IProject {
	title: string;
	description: string;
	createdDate: Date;
	bannerFileName: string;
	projectLink?: string;
	repositoryLink?: string;
	highlight?: boolean;
}

export const projectsMockup: IProject[] = [
	{
		title: 'Multiply Me',
		description: `O site consiste em um jogo de matemática onde ajuda os usuários a treinarem multiplicação e pensamento rápido, a interface foi baseada no Duolingo, bem como as animações.`,
		createdDate: new Date(2023, 6, 6),
		bannerFileName: 'multiplyme.jpeg',
		projectLink: 'https://delgatech-multiply-me.netlify.app/index.html',
		repositoryLink: 'https://github.com/Delgado-tech/multiply-me-game',
		highlight: true,
	},
	{
		title: 'Imprinting',
		description: `Um site para captação de novos clientes para a empresa Imprinting, com navegação entre páginas, animações e formulário de interesse com prevenção de spam.`,
		createdDate: new Date(2024, 3, 7),
		bannerFileName: 'imprinting.jpeg',
		repositoryLink: 'https://github.com/Delgado-tech/imprinting-landing-page',
		highlight: true,
	},
	{
		title: 'Admin Painel',
		description: `O site consiste em um painel administrativo, onde os gestores podem controlar o cadastro dos usuários e do inventário de produtos de sua marca.`,
		createdDate: new Date(2023, 11, 19),
		bannerFileName: 'controle_de_estoque.png',
		repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
		highlight: true,
	},
	{
		title: 'Meowtfolio',
		description: `Um modelo de portfólio elaborado para ser vendido como template.`,
		createdDate: new Date(2023, 7, 25),
		bannerFileName: 'meowtfolio.jpeg',
		projectLink: 'https://meowtfolio.vercel.app/',
		repositoryLink: 'https://github.com/Delgado-tech/portfolio-meow',
		highlight: true,
	},
	{
		title: 'Finance.io',
		description: `Um dashboard administrativo para análise de despesas, com funcionalidades para registrar receitas, despesas, definir metas e muito mais. Inclui gráficos informativos para facilitar o entendimento dos dados.`,
		createdDate: new Date(2024, 1, 12),
		bannerFileName: 'financeio.jpeg',
		repositoryLink: 'https://github.com/Delgado-tech/dncommerce',
		highlight: true,
	},
];
