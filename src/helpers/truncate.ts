export function truncate(input: string, count: number) {
	if (input.length > count) {
		return input.substring(0, count) + '...'
	}
	return input
}
