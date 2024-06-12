export function preventAnimationWhenPageLoad(
	element: HTMLElement,
	duration: number = 500
) {
	element.classList.add('prevent_animation_when_page_load');

	setTimeout(() => {
		element.classList.remove('prevent_animation_when_page_load');
	}, duration);
}
