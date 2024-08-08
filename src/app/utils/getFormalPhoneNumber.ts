import { socialLinksMockup } from '../mocks/social-links.mockup';

export function getFormalPhoneNumberFunc(): string {
	const social = socialLinksMockup;

	let result: string;

	result = social.phone.ddd + ' ';
	result += social.phone.number.slice(0, 5) + '-';
	result += social.phone.number.slice(5);

	return result;
}
