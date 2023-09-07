import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// 3rd Party Assets
import {
	Activity,
	Home,
	Sliders,
	Settings,
	BarChart2,
	Layers,
} from 'react-native-feather'

// Screens
import { WorkoutListScreen } from '../screens/WorkoutListScreen'
import { ExercisesScreen } from '../screens/ExerciseScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { AnalyticsScreen } from '../screens/AnalyticsScreen'
import { SettingsScreen } from '../screens/SettingsScreen'

// Local Components
import { TabBar } from '../components/TabBar'

const Tab = createBottomTabNavigator()

export const DefaultNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}>
			<Tab.Screen
				name="Workouts"
				component={WorkoutListScreen}
				options={{
					tabBarAccessibilityLabel: 'Workouts',
					tabBarIcon: Layers,
				}}
			/>
			<Tab.Screen
				name="Exercises"
				component={ExercisesScreen}
				options={{
					tabBarAccessibilityLabel: 'Exercises',
					tabBarIcon: Activity,
				}}
			/>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarAccessibilityLabel: 'Home',
					tabBarIcon: Home,
				}}
			/>
			<Tab.Screen
				name="Analytics"
				component={AnalyticsScreen}
				options={{
					tabBarAccessibilityLabel: 'Analytics',
					tabBarIcon: BarChart2,
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarAccessibilityLabel: 'Settings',
					tabBarIcon: Sliders,
				}}
			/>
		</Tab.Navigator>
	)
}
