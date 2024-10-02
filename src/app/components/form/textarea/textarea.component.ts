import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RegexFunction, RegexFunctionType } from '../../../utils/regex';

@Component({
	selector: 'app-textarea',
	standalone: true,
	imports: [],
	templateUrl: './textarea.component.html',
	styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
	@Input('textarea-id') textareaId!: string;
	@Input('textarea-label') label: string = 'Label';
	@Input('textarea-placeholder') placeholder: string = '';
	@Input('textarea-rows') rows: number = 4;
	@Input('textarea-max-length') maxLength: number = 256;
	@Input('textarea-show-letter-counter') showLetterCounter: boolean = false;
	@Input('textarea-regex') regex: RegexFunctionType = RegexFunction.Default;

	@ViewChild('Label') LabelRef!: ElementRef<HTMLElement>;

	value: string = '';
	remainingLetters: number = 0;

	ngOnInit() {
		this.remainingLetters = this.maxLength;

		if (!this.textareaId) {
			throw new TypeError(
				'O campo textarea-id é obrigatório em TextareaComponent'
			);
		}
	}

	onInputChange(event: Event) {
		const target = event.target as HTMLInputElement;
		const label = this.LabelRef.nativeElement;

		if (target.value.length > this.maxLength) {
			target.value = this.value;
			return;
		}

		target.value = this.regex(target.value).trim();

		label.classList.remove('textarea_has_text');

		if (target.value.length > 0) {
			label.classList.add('textarea_has_text');
		}

		this.value = target.value;
		this.remainingLetters = this.maxLength - this.value.length;
	}
}
