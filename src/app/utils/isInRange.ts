export function isInRange(value: number, start: number, end: number): boolean {
	if (start > end) {
		[start, end] = [end, start];
	}

	return value >= start && value <= end;
}
