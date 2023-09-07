import { useState } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

import * as Icons from 'react-native-feather'

import Screen from '../components/Screen'
import { TextInput } from '../components/TextInput'

export const ExercisesScreen = () => {
	const [text, onChangeText] = useState('Text')

	const handleChange = (
		value: string | NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		onChangeText(value as string)
	}

	return (
		<Screen title="Exercises">
			<TextInput
				onChange={(value) => handleChange(value)}
				accessibilityLabel="Search Exercises"
				icon={(props) => <Icons.Search {...props} />}
				placeholder="Search for exercises"
			/>
		</Screen>
	)
}
