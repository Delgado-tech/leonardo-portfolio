import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ContactCallComponent } from '../../components/contact-call/contact-call.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectListComponent } from '../../components/project-list/project-list.component';
import { AboutMeComponent } from '../../components/sections/home/about-me/about-me.component';
import { HomeIntroductionComponent } from '../../components/sections/home/home-introduction/home-introduction.component';
import { MyServicesComponent } from '../../components/sections/home/my-services/my-services.component';
import { ProjectExamplesBannersComponent } from '../../components/sections/home/project-examples-banners/project-examples-banners.component';
import { SkillsComponent } from '../../components/sections/home/skills/skills.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		ButtonComponent,
		HeaderComponent,
		HomeIntroductionComponent,
		ProjectListComponent,
		ProjectExamplesBannersComponent,
		AboutMeComponent,
		MyServicesComponent,
		SkillsComponent,
		ContactCallComponent,
	],
	templateUrl: './home.component.html',
})
export class HomeComponent {}
