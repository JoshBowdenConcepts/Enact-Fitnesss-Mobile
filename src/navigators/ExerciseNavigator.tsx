import { createStackNavigator } from '@react-navigation/stack'

import { ExercisesScreen } from '../screens/ExerciseScreen'
import { ExerciseDetailsScreen } from '../screens/ExercisesDetailsScreen'
import { ExerciseDataEntryScreen } from '../screens/ExerciseDataEntryScreen'
import { ExerciseCategories } from '../data/exercises'

export enum ExerciseNavItems {
	LIST = 'My Exercises',
	DETAILS = 'Exercise Details',
	DATA = 'Exercise Data',
}

type ExerciseDetailsAndData = {
	name: string
	type: ExerciseCategories
	description?: string
}

export type ExerciseStackParamList = {
	[ExerciseNavItems.LIST]: { name: string }
	[ExerciseNavItems.DETAILS]: ExerciseDetailsAndData
	[ExerciseNavItems.DATA]: Partial<ExerciseDetailsAndData>
}

const Stack = createStackNavigator<ExerciseStackParamList>()

export const ExerciseNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={ExerciseNavItems.LIST}
			screenOptions={{
				presentation: 'card',
				headerShown: false,
			}}>
			<Stack.Screen name={ExerciseNavItems.LIST} component={ExercisesScreen} />
			<Stack.Screen
				name={ExerciseNavItems.DETAILS}
				component={ExerciseDetailsScreen}
			/>
			<Stack.Screen
				name={ExerciseNavItems.DATA}
				component={ExerciseDataEntryScreen}
			/>
		</Stack.Navigator>
	)
}
