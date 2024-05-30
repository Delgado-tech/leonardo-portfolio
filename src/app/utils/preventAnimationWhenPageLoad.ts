export function preventAnimationWhenPageLoad(
	element: HTMLElement,
	duration: number = 500
) {
	setTimeout(() => {
		element.classList.remove('prevent_animation_when_page_load');
	}, duration);
}
