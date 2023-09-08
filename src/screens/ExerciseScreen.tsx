import { useState } from 'react'
import {
	Text,
	View,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import * as Icons from 'react-native-feather'

import { globalStyles } from '../styles/global'

import {
	ExerciseNavItems,
	ExerciseStackParamList,
} from '../navigators/ExerciseNavigator'

import Screen from '../components/Screen'
import { TextInput } from '../components/TextInput'
import { Card } from '../components/Card'

type Props = BottomTabScreenProps<ExerciseStackParamList, ExerciseNavItems.LIST>

export const ExercisesScreen = ({ route, navigation }: Props) => {
	const [text, onChangeText] = useState('Text')

	const handleChange = (
		value: string | NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		onChangeText(value as string)
	}

	return (
		<Screen
			title={route.name}
			preScrollChildren={
				<TextInput
					onChange={(value) => handleChange(value)}
					accessibilityLabel="Search Exercises"
					icon={(props) => <Icons.Search {...props} />}
					placeholder="Search for exercises"
					style={{
						marginBottom: 20,
					}}
				/>
			}>
			<Text style={globalStyles.h3}>Category</Text>
			<View style={{ gap: 25 }}>
				<Card
					title="Something Cool"
					description={
						'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.'
					}
					onPress={() =>
						navigation.navigate(ExerciseNavItems.DETAILS, {
							name: 'Something Cool',
							description:
								'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
							type: 'Arms',
						})
					}
				/>
				<Card
					title="TRX Pushup"
					description={
						'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.'
					}
					horizontal
					onPress={() =>
						navigation.navigate(ExerciseNavItems.DETAILS, {
							name: 'TRX Pushup',
							description:
								'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
							type: 'Chest',
						})
					}
				/>
			</View>
		</Screen>
	)
}
