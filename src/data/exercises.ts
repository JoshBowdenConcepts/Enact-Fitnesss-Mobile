import { UniqueArray } from '../helperTypes'

type ExerciseCategories =
	| 'Shoulders'
	| 'Chest'
	| 'Back'
	| 'Arms'
	| 'Legs'
	| 'Abs'
	| 'Cardio'
	| 'Stretching'

export type Exercises = {
	name: string
	category: ExerciseCategories
	description?: string
}

export const exercises: Exercises[] = [
	{
		name: 'Dumbbell Bench Press',
		category: 'Chest',
		description:
			"The dumbbell bench press is a mainstay of workout enthusiasts worldwide. It's a classic move for building a bigger, stronger chest. As such, it's often placed first in mass-building chest workouts.",
	},
	{
		name: 'Dumbbell Front Raises',
		category: 'Shoulders',
	},
	{
		name: 'Straight Leg Deadlift',
		category: 'Back',
	},
	{
		name: 'Dumbbell Curl',
		category: 'Arms',
	},
	{
		name: 'Barbell Squat',
		category: 'Legs',
	},
	{
		name: 'Cable Crunches',
		category: 'Abs',
	},
	{
		name: 'Running',
		category: 'Cardio',
	},
	{
		name: 'Cat Cow',
		category: 'Stretching',
	},
]
