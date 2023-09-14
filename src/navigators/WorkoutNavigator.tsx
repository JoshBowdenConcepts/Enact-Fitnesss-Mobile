import { createStackNavigator } from '@react-navigation/stack'

import { WorkoutListScreen } from '../screens/WorkoutListScreen'
import { WorkoutDetailsScreen } from '../screens/WorkoutDetailsScreen'
import { WorkoutDataScreen } from '../screens/WorkoutDataScreen'

export enum WorkoutNavItems {
	LIST = 'My Workouts',
	DETAILS = 'Workout Details',
	DATA = 'Workout Data',
}

type WorkoutDetailsAndData = {
	name: string
	description?: string
}

export type WorkoutStackParamList = {
	[WorkoutNavItems.LIST]: { name: string }
	[WorkoutNavItems.DETAILS]: WorkoutDetailsAndData
	[WorkoutNavItems.DATA]: Partial<WorkoutDetailsAndData>
}

const Stack = createStackNavigator<WorkoutStackParamList>()

export const WorkoutNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName={WorkoutNavItems.LIST}
			screenOptions={{
				presentation: 'card',
				headerShown: false,
			}}>
			<Stack.Screen name={WorkoutNavItems.LIST} component={WorkoutListScreen} />
			<Stack.Screen
				name={WorkoutNavItems.DETAILS}
				component={WorkoutDetailsScreen}
			/>

			<Stack.Screen name={WorkoutNavItems.DATA} component={WorkoutDataScreen} />
		</Stack.Navigator>
	)
}
