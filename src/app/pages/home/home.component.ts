import { Component } from '@angular/core';
import { ScrollObserverService } from '../../services/scroll-observer.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	constructor(protected scrollObserver: ScrollObserverService) {
		scrollObserver.registerObserver({
			id: '1',
			handler: (props) => {
				console.log(props.element.topInView);
			},
		});
	}
}
