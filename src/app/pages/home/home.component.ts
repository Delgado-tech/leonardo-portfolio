import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HomeIntroductionComponent } from '../../components/sections/home/home-introduction/home-introduction.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ButtonComponent, HeaderComponent, HomeIntroductionComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
