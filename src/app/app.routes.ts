import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ImprintingComponent } from './pages/project-display-pages/imprinting/imprinting.component';
import { MultiplyMePageComponent } from './pages/project-display-pages/multiply-me-page/multiply-me-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'contato', component: ContactPageComponent },
	{ path: 'projetos', component: ProjectsPageComponent },
	{ path: 'projetos/multiply-me', component: MultiplyMePageComponent },
	{ path: 'projetos/imprinting', component: ImprintingComponent },
	{ path: 'projetos/admin-panel', component: MultiplyMePageComponent },
	{ path: 'projetos/meowtfolio', component: MultiplyMePageComponent },
	{ path: 'projetos/finance-io', component: MultiplyMePageComponent },
	{ path: 'projetos/asse', component: MultiplyMePageComponent },
	{ path: 'servicos', component: ServicesPageComponent },

	{ path: '404', redirectTo: '' },
	{ path: '**', redirectTo: '' },

	//alias
	{ path: 'home', redirectTo: '' },
	{ path: 'contact', redirectTo: 'contato' },
	{ path: 'projects', redirectTo: 'projetos' },
	{ path: 'services', redirectTo: 'servicos' },
];
