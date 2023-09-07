import { Text } from 'react-native'
import { useFonts } from 'expo-font'

import Screen from '../components/Screen'

import { globalStyles } from '../styles/global'

export const HomeScreen = () => {
	return (
		<Screen title="Home">
			<Text style={[{ fontFamily: 'HubotSans-Regular' }, globalStyles.body]}>
				Hello! Welcome to home!
			</Text>
		</Screen>
	)
}
