export enum EXERCISE_CATEGORIES {
	SHOULDERS = 'Shoulders',
	CHEST = 'Chest',
	BACK = 'Back',
	ARMS = 'Arms',
	LEGS = 'Legs',
	ABS = 'Abs',
	CARDIO = 'Cardio',
	STRETCHING = 'Stretching',
}

export type ExerciseCategories = `${EXERCISE_CATEGORIES}`

export type Exercises = {
	name: string
	category: ExerciseCategories
	description?: string
}

export const exercises: Exercises[] = [
	{
		name: 'Something Cool',
		category: EXERCISE_CATEGORIES.ARMS,
		description:
			'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
	},
	{
		name: 'TRX Pushup',
		category: EXERCISE_CATEGORIES.CHEST,
		description:
			'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
	},
	{
		name: 'Lat Pull Down',
		category: EXERCISE_CATEGORIES.BACK,
		description:
			'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
	},
	{
		name: 'Leg Lift',
		category: EXERCISE_CATEGORIES.ABS,
		description:
			'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
	},
]
