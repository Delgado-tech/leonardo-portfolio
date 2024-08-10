import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'contato', component: ContactPageComponent },
	{ path: 'projetos', component: ProjectsPageComponent },
	{ path: 'servicos', component: ServicesPageComponent },

	{ path: '404', redirectTo: '' },
	{ path: '**', redirectTo: '' },

	//alias
	{ path: 'home', redirectTo: '' },
	{ path: 'contact', redirectTo: 'contato' },
	{ path: 'projects', redirectTo: 'projetos' },
	{ path: 'services', redirectTo: 'servicos' },
];
