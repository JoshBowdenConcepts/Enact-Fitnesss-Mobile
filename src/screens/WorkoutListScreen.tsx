import { Text } from 'react-native'

import Screen from '../components/Screen'

import { globalStyles } from '../styles/global'

export const WorkoutListScreen = () => {
	return (
		<Screen>
			<Text style={globalStyles.body}>Hello! Welcome to workout list!</Text>
		</Screen>
	)
}
