import { Text } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import Screen from '../components/Screen'

import { globalStyles } from '../styles/global'
import {
	BottomNavItems,
	RootStackParamList,
} from '../navigators/DefaultNavigator'

type Props = BottomTabScreenProps<RootStackParamList, BottomNavItems.HOME>

export const HomeScreen = ({ route }: Props) => {
	return (
		<Screen title={route.name}>
			<Text style={[{ fontFamily: 'HubotSans-Regular' }, globalStyles.body]}>
				Hello! Welcome to home!
			</Text>
		</Screen>
	)
}
