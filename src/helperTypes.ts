export type UniqueArray<T> = T extends readonly [infer X, ...infer Rest]
	? InArray<Rest, X> extends true
		? ['Encountered value with duplicates:', X]
		: readonly [X, ...UniqueArray<Rest>]
	: T

type InArray<T, X> = T extends readonly [X, ...infer _Rest]
	? true
	: T extends readonly [X]
	? true
	: T extends readonly [infer _, ...infer Rest]
	? InArray<Rest, X>
	: false

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
	}[Keys]
