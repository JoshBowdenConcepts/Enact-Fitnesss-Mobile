import { Text } from 'react-native'

import Screen from '../components/Screen'

import { globalStyles } from '../styles/global'

export const AnalyticsScreen = () => {
	return (
		<Screen>
			<Text style={globalStyles.body}>Hello! Welcome to analytics!</Text>
		</Screen>
	)
}
