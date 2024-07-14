import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

type ButtonColorType = 'primary' | 'primary_gradient' | 'gray' | 'lightgray';
type AnchorTargetType = '_self' | '_blank';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@ViewChild('buttonRef') buttonRef!: ElementRef<HTMLButtonElement>;

	@Input('href') href: string = '#';
	@Input('routerLink') public routerLink: string | undefined;
	@Input('target') target: AnchorTargetType = '_self';
	@Input('bordered') bordered: boolean = false;
	@Input('color') color: ButtonColorType = 'primary';

	ngAfterViewInit() {
		if (this.bordered) this.buttonRef.nativeElement.classList.add('bordered');
		this.buttonRef.nativeElement.classList.add(this.color);
	}
}
