import { clamp } from './clamp';

export type RegexFunctionType = (value: string) => string;

export class RegexFunction {
	static Default(value: string): string {
		return value;
	}

	static Numbers(value: string): string {
		value = value.replace(/\D/g, '');
		value = String(Number(value));

		return value;
	}

	static Decimal(value: string): string {
		do {
			value = '0' + value;
			value = value.replace(/\D/g, '');
			value = value.replace(/^(\d+)(\d{2})$/, '$1.$2');
			value = parseFloat(value).toFixed(2) || '0.00';
		} while (value.length < 4);

		return value;
	}

	static MoneyBrl(value: string): string {
		value = value.replace(/\D/g, '');
		value = String(Number(value));
		value = value.replace(/^(\d+)(\d{2})$/, '$1.$2');
		value = value.length > 0 ? 'R$ ' + value : value;
		return value;
	}

	static Letters(value: string): string {
		value = value.replace(/[^A-z ]/g, '');
		value = value.replace('  ', ' ');
		value = value.trimStart();
		return value;
	}

	static LettersAccent(value: string): string {
		value = value.replace(/[^A-záàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ ]/g, '');
		value = value.replace('  ', ' ');
		value = value.trimStart();
		return value;
	}

	static Cpf(value: string): string {
		value = value.substring(0, 14);
		value = value.replace(/\D/g, '');
		value = value.replace(/(\d{3})(\d)/, '$1.$2');
		value = value.replace(/(\d{3})(\d)/, '$1.$2');
		value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

		return value;
	}

	static Cel(value: string): string {
		value = value.substring(0, 15);
		value = value.replace(/\D/g, '');
		value = value.replace(/(\d{2})(\d)/, '($1) $2');
		value = value.replace(/(\d{5})(\d{4})$/, '$1-$2');

		return value;
	}

	static Date(value: string): string {
		value = value.substring(0, 10);
		value = value.replace(/\D/g, '');

		const day = Number(value.substring(0, 2));
		const month = Number(value.substring(2, 4));
		const year = Number(value.substring(4, 8));

		if (value.length === 2) {
			value = String(clamp(day, 1, 31)).padStart(2, '0');
		} else if (value.length === 4) {
			value = `${day}${String(clamp(month, 1, 12)).padStart(2, '0')}`;
		} else if (value.length === 8) {
			value = `${day}${month}${String(Math.max(year, 1900)).padStart(2, '0')}`;
		}

		value = value.replace(/(\d{2})(\d)/, '$1/$2');
		value = value.replace(/(\d{2})(\d)/, '$1/$2');
		value = value.replace(/(\d{4})(\d)$/, '$1/$2');

		return value;
	}
}
