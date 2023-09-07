import { useState } from 'react'
import {
	Text,
	ScrollView,
	View,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from 'react-native'

import * as Icons from 'react-native-feather'

import { globalStyles } from '../styles/global'
import { truncate } from '../helpers/truncate'

import Screen from '../components/Screen'
import { TextInput } from '../components/TextInput'
import { Card } from '../components/Card'

export const ExercisesScreen = () => {
	const [text, onChangeText] = useState('Text')

	const handleChange = (
		value: string | NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		onChangeText(value as string)
	}

	return (
		<Screen
			title="Exercises"
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
					title="TRX Pushup"
					description="A short description here. This could wrap if I needed it to as well. But I would want to ensure line height"
				/>
				<Card
					title="TRX Pushup"
					description={truncate(
						'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
						110
					)}
					horizontal
				/>
			</View>
		</Screen>
	)
}
