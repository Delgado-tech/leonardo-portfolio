import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonColorType = 'primary' | 'primary_gradient' | 'gray' | 'lightgray';
type AnchorTargetType = '_self' | '_blank';

@Component({
	selector: 'app-redirect-button',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './redirect-button.component.html',
	styleUrl: './redirect-button.component.scss',
})
export class RedirectButtonComponent {
	@ViewChild('ButtonRef') buttonRef!: ElementRef<HTMLButtonElement>;

	@Input('href') href: string | undefined;
	@Input('routerLink') public routerLink: string | undefined;
	@Input('target') target: AnchorTargetType = '_self';
	@Input('bordered') bordered: boolean = false;
	@Input('shrink') shrink: boolean = false;
	@Input('color') color: ButtonColorType = 'primary';

	ngAfterViewInit() {
		if (this.bordered) this.buttonRef.nativeElement.classList.add('bordered');
		if (this.shrink) this.buttonRef.nativeElement.classList.add('shrink');
		this.buttonRef.nativeElement.classList.add(this.color);
	}
}
