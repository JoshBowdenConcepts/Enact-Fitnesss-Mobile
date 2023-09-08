import { Text } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import Screen from '../components/Screen'

import { globalStyles } from '../styles/global'

import {
	BottomNavItems,
	RootStackParamList,
} from '../navigators/DefaultNavigator'

type Props = BottomTabScreenProps<RootStackParamList, BottomNavItems.ANALYTICS>

export const AnalyticsScreen = ({ route }: Props) => {
	return (
		<Screen title={route.name}>
			<Text style={globalStyles.body}>Hello! Welcome to analytics!</Text>
		</Screen>
	)
}
