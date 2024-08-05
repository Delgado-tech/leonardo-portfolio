interface INavbarLinks {
	routeLink: string;
	routeDisplay: string;
}

export const navbarLinkMockup: INavbarLinks[] = [
	{ routeDisplay: 'Home', routeLink: '/home' },
	{ routeDisplay: 'Serviços', routeLink: '/servicos' },
	{ routeDisplay: 'Projetos', routeLink: '/projetos' },
	{ routeDisplay: 'Contato', routeLink: '/contato' },
];
