import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Screen from '../components/Screen'

import { globalStyles } from '../styles/global'

export const SettingsScreen = () => {
	return (
		<Screen>
			<Text style={globalStyles.body}>Hello! Welcome to settings!</Text>
			<StatusBar />
		</Screen>
	)
}
