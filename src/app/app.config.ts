import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AnimationService } from './services/animation/animation.service';
import { ScrollObserverService } from './services/scroll-observer/scroll-observer.service';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		ScrollObserverService,
		AnimationService,
	],
};
