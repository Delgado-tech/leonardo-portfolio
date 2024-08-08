import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RegexFunction, RegexFunctionType } from '../../../utils/regex';
import { InputType } from './input.component.model';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss',
})
export class InputComponent {
	@Input('input-id') inputId!: string;
	@Input('input-type') inputType: InputType = 'text';
	@Input('input-label') label: string = 'Label';
	@Input('input-placeholder') placeholder: string = '';
	@Input('input-max-length') maxLength: number = 256;
	@Input('input-regex') regex: RegexFunctionType = RegexFunction.Default;

	@ViewChild('Label') LabelRef!: ElementRef<HTMLElement>;

	ngOnInit() {
		if (!this.inputId) {
			throw new TypeError('O campo input-id é obrigatório em InputComponent');
		}
	}

	onInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const label = this.LabelRef.nativeElement;

		target.value = this.regex(target.value).trim();

		label.classList.remove('input_has_text');

		if (target.value.length > 0) {
			label.classList.add('input_has_text');
		}
	}
}
