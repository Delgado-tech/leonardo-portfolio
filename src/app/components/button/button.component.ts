import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonColorType = 'primary' | 'primary_gradient' | 'gray' | 'lightgray';
type ButtonType = 'button' | 'menu' | 'reset' | 'submit';
type AnchorTargetType = '_self' | '_blank';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [RouterLink, CommonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@ViewChild('ButtonRef') buttonRef!: ElementRef<HTMLButtonElement>;

	@Input('href') href: string | undefined;
	@Input('route-link') routeLink: string | undefined;
	@Input('target') target: AnchorTargetType = '_self';
	@Input('type') type: ButtonType = 'button';
	@Input('bordered') bordered: boolean = false;
	@Input('shrink') shrink: boolean = false;
	@Input('color') color: ButtonColorType = 'primary';

	ngAfterViewInit() {
		if (this.bordered) this.buttonRef.nativeElement.classList.add('bordered');
		if (this.shrink) this.buttonRef.nativeElement.classList.add('shrink');
		this.buttonRef.nativeElement.classList.add(this.color);
	}
}
