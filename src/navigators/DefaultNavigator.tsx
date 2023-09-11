import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// 3rd Party Assets
import {
	Activity,
	Home,
	Sliders,
	BarChart2,
	Layers,
} from 'react-native-feather'

export enum BottomNavItems {
	WORKOUTS = 'Workouts',
	EXERCISES = 'Exercises',
	HOME = 'Home',
	ANALYTICS = 'Analytics',
	SETTINGS = 'Settings',
}

export type RootStackParamList = {
	[BottomNavItems.WORKOUTS]: { name: string }
	[BottomNavItems.EXERCISES]: { name: string }
	[BottomNavItems.HOME]: { name: string }
	[BottomNavItems.ANALYTICS]: { name: string }
	[BottomNavItems.SETTINGS]: { name: string }
}

// Screens
import { WorkoutListScreen } from '../screens/WorkoutListScreen'
import { ExerciseNavigator } from './ExerciseNavigator'
import { HomeScreen } from '../screens/HomeScreen'
import { AnalyticsScreen } from '../screens/AnalyticsScreen'
import { SettingsScreen } from '../screens/SettingsScreen'

// Local Components
import { TabBar } from '../components/TabBar'
import { WorkoutNavigator } from './WorkoutNavigator'

const Tab = createBottomTabNavigator<RootStackParamList>()

export const DefaultNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName={BottomNavItems.HOME}
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}>
			<Tab.Screen
				name={BottomNavItems.WORKOUTS}
				component={WorkoutNavigator}
				options={{
					tabBarAccessibilityLabel: BottomNavItems.WORKOUTS,
					tabBarIcon: Layers,
				}}
			/>
			<Tab.Screen
				name={BottomNavItems.EXERCISES}
				component={ExerciseNavigator}
				options={{
					tabBarAccessibilityLabel: BottomNavItems.EXERCISES,
					tabBarIcon: Activity,
				}}
			/>
			<Tab.Screen
				name={BottomNavItems.HOME}
				component={HomeScreen}
				options={{
					tabBarAccessibilityLabel: BottomNavItems.HOME,
					tabBarIcon: Home,
				}}
			/>
			<Tab.Screen
				name={BottomNavItems.ANALYTICS}
				component={AnalyticsScreen}
				options={{
					tabBarAccessibilityLabel: BottomNavItems.ANALYTICS,
					tabBarIcon: BarChart2,
				}}
			/>
			<Tab.Screen
				name={BottomNavItems.SETTINGS}
				component={SettingsScreen}
				options={{
					tabBarAccessibilityLabel: BottomNavItems.SETTINGS,
					tabBarIcon: Sliders,
				}}
			/>
		</Tab.Navigator>
	)
}
