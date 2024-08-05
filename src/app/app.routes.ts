import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'contato', component: ContactPageComponent },

	//alias
	{ path: 'home', redirectTo: '' },
	{ path: 'contact', redirectTo: 'contato' },
];
