import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutMeComponent } from '../../components/sections/home/about-me/about-me.component';
import { HomeIntroductionComponent } from '../../components/sections/home/home-introduction/home-introduction.component';
import { ProjectExamplesBannersComponent } from '../../components/sections/home/project-examples-banners/project-examples-banners.component';
import { SkillsComponent } from '../../components/sections/home/skills/skills.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		ButtonComponent,
		HeaderComponent,
		HomeIntroductionComponent,
		ProjectExamplesBannersComponent,
		AboutMeComponent,
		SkillsComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
