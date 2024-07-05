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
				subDisplay: 'framework node.js',
				comment: 'ferramenta utilizada por empresas como Uber e IBM.',
			},
			{
				fileName: 'nestjs',
				displayName: 'NestJS',
				subDisplay: 'framework node.js',
				comment:
					'ferramenta utilizada em soluções empresariais por empresas como Citi e Siemens.',
			},
			{
				fileName: 'prisma',
				displayName: 'Prisma',
				subDisplay: 'kit de ferramentas de banco de dados',
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
				subDisplay: 'ambiente de execução javascript',
				comment: 'usado em aplicações por empresas como Netflix e LinkedIn.',
			},
			{
				fileName: 'java',
				displayName: 'Java',
				subDisplay: 'linguagem de programação',
				comment:
					'ferramenta amplamente utilizada em aplicações empresariais por empresas como Google e Amazon.',
			},
			{
				fileName: 'php',
				displayName: 'PHP',
				subDisplay: 'linguagem de programação',
			},
			{
				fileName: 'csharp',
				displayName: 'C#',
				subDisplay: 'linguagem de programação',
			},
			{
				fileName: 'python',
				displayName: 'Python',
				subDisplay: 'linguagem de programação',
			},
			{
				fileName: 'springbot',
				displayName: 'Spring Bot',
				subDisplay: 'framework java',
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
				subDisplay: 'sistema de banco de dados',
				comment:
					'usado em aplicações web escaláveis por empresas como Facebook e Twitter.',
			},
			{
				fileName: 'postgresql',
				displayName: 'PostgreSQL',
				subDisplay: 'sistema de banco de dados',
			},
			{
				fileName: 'mongodb',
				displayName: 'MongoDB',
				subDisplay: 'banco de dados no-sql',
				comment:
					'utilizado em soluções de big data por empresas como Adobe e eBay.',
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
				subDisplay: 'linguagem de marcação',
			},
			{
				fileName: 'css',
				displayName: 'CSS',
				subDisplay: 'linguagem de estilização',
			},
			{
				fileName: 'javascript',
				displayName: 'JavaScript',
				subDisplay: 'linguagem de programação',
			},
			{
				fileName: 'typescript',
				displayName: 'TypeScript',
				subDisplay: 'linguagem de programação',
			},
			{
				fileName: 'angular',
				displayName: 'Angular',
				subDisplay: 'framework front-end',
				comment:
					'ferramenta amplamente utilizada em aplicações por empresas como Google e Microsoft.',
			},
			{
				fileName: 'react',
				displayName: 'React',
				subDisplay: 'biblioteca javascript',
				comment:
					'ferramenta amplamente utilizada em aplicações por empresas como Facebook e Airbnb.',
			},
			{
				fileName: 'react-router-dom',
				displayName: 'React Router DOM',
				subDisplay: 'biblioteca react',
			},
			{
				fileName: 'nextjs',
				displayName: 'NextJS',
				subDisplay: 'framework react',
			},
			{
				fileName: 'tailwind',
				displayName: 'Tailwind',
				subDisplay: 'framework de estilização css',
			},
			{
				fileName: 'sass',
				displayName: 'SASS',
				subDisplay: 'linguagem de extensão css',
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
				subDisplay: 'framework de testes unitários',
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
				subDisplay: 'plataforma de nuvem',
				comment:
					'utilizado para computação em nuvem por empresas como Netflix e Airbnb.',
			},
			{
				fileName: 'git',
				displayName: 'Git',
				subDisplay: 'sistema de controle de versão',
			},
			{
				fileName: 'github',
				displayName: 'GitHub',
				subDisplay: 'hospedagem de repositórios Git',
				comment:
					'hospeda milhões de repositórios, incluindo aqueles de empresas como Google e Microsoft.',
			},
			{
				fileName: 'figma',
				displayName: 'Figma',
				subDisplay: 'ferramenta de design',
			},
			{
				fileName: 'docker',
				displayName: 'Docker',
				subDisplay: 'plataforma de containerização',
				comment:
					'usado para implantação de containers por empresas como Spotify e Shopify.',
			},
			{
				fileName: 'canva',
				displayName: 'Canva',
				subDisplay: 'ferramenta de design gráfico',
			},
		],
	},
];
