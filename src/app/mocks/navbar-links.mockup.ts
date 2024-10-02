interface INavbarLinks {
	routeLink: string;
	routeDisplay: string;
}

export const navbarLinkMockup: INavbarLinks[] = [
	{ routeDisplay: 'Home', routeLink: '/' },
	{ routeDisplay: 'Serviços', routeLink: '/servicos' },
	{ routeDisplay: 'Projetos', routeLink: '/projetos' },
	{ routeDisplay: 'Contato', routeLink: '/contato' },
];
