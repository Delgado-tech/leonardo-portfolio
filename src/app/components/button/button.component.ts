import { Component, ElementRef, Input, ViewChild } from '@angular/core';

type ButtonColorType = 'primary' | 'primary_gradient' | 'gray' | 'lightgray';
type ButtonType = 'button' | 'menu' | 'reset' | 'submit';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@ViewChild('ButtonRef') buttonRef!: ElementRef<HTMLButtonElement>;

	@Input('bordered') bordered: boolean = false;
	@Input('type') type: ButtonType = 'button';
	@Input('shrink') shrink: boolean = false;
	@Input('color') color: ButtonColorType = 'primary';

	ngAfterViewInit() {
		if (this.bordered) this.buttonRef.nativeElement.classList.add('bordered');
		if (this.shrink) this.buttonRef.nativeElement.classList.add('shrink');
		this.buttonRef.nativeElement.classList.add(this.color);
	}
}
