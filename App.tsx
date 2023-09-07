import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'

// Realm Provider
import { RealmProvider } from './src/models/ModelContext'

// Navigator
import { DefaultNavigator } from './src/navigators/DefaultNavigator'

export default function App() {
	const [fontsLoaded] = useFonts({
		// MonaSans
		'MonaSansCondensed-Light': require('./assets/MonaSans/MonaSansCondensed-Light.otf'),
		'MonaSansCondensed-Regular': require('./assets/MonaSans/MonaSansCondensed-Regular.otf'),
		'MonaSansCondensed-Bold': require('./assets/MonaSans/MonaSansCondensed-Bold.otf'),
		'MonaSans-Bold': require('./assets/MonaSans/MonaSans-Bold.otf'),
		// HubotSans
		'HubotSans-Light': require('./assets/HubotSans/Hubot-Sans-Light.otf'),
		'HubotSans-Regular': require('./assets/HubotSans/Hubot-Sans-Regular.otf'),
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<NavigationContainer>
			<DefaultNavigator />
		</NavigationContainer>
	)
}
