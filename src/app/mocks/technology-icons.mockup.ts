interface IIconList {
	fileName: string;
	displayName: string;
	subDisplay: string;
	comment?: string;
}

interface IIconCategory {
	categoryName: string;
	dirName: string;
	iconList: IIconList[];
}

export const technologyIcons: IIconCategory[] = [
	{
		categoryName: 'api',
		dirName: 'api_icons',
		iconList: [
			{
				fileName: 'express',
				displayName: 'Express',
				subDisplay: 'Framework Node.js',
				comment: 'Utilizado por empresas como Uber e IBM.',
			},
			{
				fileName: 'nestjs',
				displayName: 'NestJS',
				subDisplay: 'Framework Node.js',
				comment:
					'Utilizado em soluções empresariais por empresas como Citi e Siemens.',
			},
			{
				fileName: 'prisma',
				displayName: 'Prisma',
				subDisplay: 'Kit de ferramentas de banco de dados',
			},
		],
	},
	{
		categoryName: 'backend',
		dirName: 'backend_icons',
		iconList: [
			{
				fileName: 'nodejs',
				displayName: 'NodeJS',
				subDisplay: 'Ambiente de execução JavaScript',
				comment: 'Usado em aplicações por empresas como Netflix e LinkedIn.',
			},
			{
				fileName: 'java',
				displayName: 'Java',
				subDisplay: 'Linguagem de programação',
				comment:
					'Amplamente utilizado em aplicações empresariais por empresas como Google e Amazon.',
			},
			{
				fileName: 'php',
				displayName: 'PHP',
				subDisplay: 'Linguagem de programação',
			},
			{
				fileName: 'csharp',
				displayName: 'CSharp',
				subDisplay: 'Linguagem de programação',
			},
			{
				fileName: 'python',
				displayName: 'Python',
				subDisplay: 'Linguagem de programação',
			},
			{
				fileName: 'springbot',
				displayName: 'Spring Bot',
				subDisplay: 'Framework Java',
			},
		],
	},
	{
		categoryName: 'database',
		dirName: 'db_icons',
		iconList: [
			{
				fileName: 'mysql',
				displayName: 'MySQL',
				subDisplay: 'Sistema de banco de dados',
				comment:
					'Usado em aplicações web escaláveis por empresas como Facebook e Twitter.',
			},
			{
				fileName: 'postgresql',
				displayName: 'PostgreSQL',
				subDisplay: 'Sistema de banco de dados',
			},
			{
				fileName: 'mongodb',
				displayName: 'MongoDB',
				subDisplay: 'Banco de dados NoSQL',
				comment:
					'Utilizado em soluções de big data por empresas como Adobe e eBay.',
			},
		],
	},
	{
		categoryName: 'frontend',
		dirName: 'frontend_icons',
		iconList: [
			{
				fileName: 'html',
				displayName: 'HTML',
				subDisplay: 'Linguagem de marcação',
			},
			{
				fileName: 'css',
				displayName: 'CSS',
				subDisplay: 'Linguagem de estilização',
			},
			{
				fileName: 'javascript',
				displayName: 'JavaScript',
				subDisplay: 'Linguagem de programação',
			},
			{
				fileName: 'typescript',
				displayName: 'TypeScript',
				subDisplay: 'Linguagem de programação',
			},
			{
				fileName: 'angular',
				displayName: 'Angular',
				subDisplay: 'Framework front-end',
			},
			{
				fileName: 'react',
				displayName: 'React',
				subDisplay: 'Biblioteca JavaScript',
				comment:
					'Amplamente utilizado em aplicações por empresas como Facebook e Airbnb.',
			},
			{
				fileName: 'react-router-dom',
				displayName: 'React Router DOM',
				subDisplay: 'Biblioteca React',
			},
			{
				fileName: 'nextjs',
				displayName: 'NextJS',
				subDisplay: 'Framework React',
			},
			{
				fileName: 'tailwind',
				displayName: 'Tailwind',
				subDisplay: 'Framework CSS',
			},
			{
				fileName: 'sass',
				displayName: 'SASS',
				subDisplay: 'Linguagem de extensão CSS',
			},
		],
	},
	{
		categoryName: 'tests',
		dirName: 'test_icons',
		iconList: [
			{
				fileName: 'jest',
				displayName: 'Jest',
				subDisplay: 'Framework de testes JavaScript',
			},
		],
	},
	{
		categoryName: 'tools',
		dirName: 'tools_icons',
		iconList: [
			{
				fileName: 'aws',
				displayName: 'AWS',
				subDisplay: 'Plataforma de nuvem',
				comment:
					'Utilizado para computação em nuvem por empresas como Netflix e Airbnb.',
			},
			{
				fileName: 'git',
				displayName: 'Git',
				subDisplay: 'Sistema de controle de versão',
			},
			{
				fileName: 'github',
				displayName: 'GitHub',
				subDisplay: 'Hospedagem de repositórios Git',
				comment:
					'Hospeda milhões de repositórios, incluindo aqueles de empresas como Google e Microsoft.',
			},
			{
				fileName: 'figma',
				displayName: 'Figma',
				subDisplay: 'Ferramenta de design',
			},
			{
				fileName: 'docker',
				displayName: 'Docker',
				subDisplay: 'Plataforma de containerização',
				comment:
					'Usado para implantação de containers por empresas como Spotify e Shopify.',
			},
			{
				fileName: 'canva',
				displayName: 'Canva',
				subDisplay: 'Ferramenta de design gráfico',
			},
		],
	},
];
