import { useState, useEffect } from 'react'
import { Image, View, Alert } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ExerciseCategories } from '../data/exercises'

import {
	ExerciseNavItems,
	ExerciseStackParamList,
} from '../navigators/ExerciseNavigator'

import { CONSTANTS } from '../styles/constants'
import { TextInput } from '../components/TextInput'
import { Button } from '../components/Button'

type Props = BottomTabScreenProps<ExerciseStackParamList, ExerciseNavItems.DATA>

export const ExerciseDataEntryScreen = ({ route, navigation }: Props) => {
	const { name, description, type } = route.params
	const [eName, setEName] = useState(name)
	const [eDescription, setEDescription] = useState(description)
	const [eType, setEType] = useState(type)

	useEffect(() => {
		// This isn't setting again on change so this isn't the issue
		name && setEName(name)
		description && setEDescription(description)
		type && setEType(type)
	}, [route.params])

	const handleSubmit = () => {
		if (!!eName && !!eType) {
			navigation.navigate(ExerciseNavItems.DETAILS, {
				name: eName,
				description: eDescription,
				type: eType,
			})
		} else {
			// TODO: Make sure this fires when applicable
			console.log(eName)
			Alert.alert('You must not leave required fields empty')
		}
	}

	return (
		<View>
			<Image
				source={require('../../assets/workout.webp')}
				style={{
					aspectRatio: 1 / 0.7,
					width: '100%',
					height: undefined,
				}}
			/>
			<View style={{ padding: CONSTANTS.spacing.large }}>
				<TextInput
					value={eName}
					label="Exercise Name"
					placeholder="Bench Press"
					onChange={(value) => setEName(value as string)}
				/>
				<TextInput
					value={eDescription}
					label="Exercise Description"
					placeholder="Using a bench pressing a barbell with weight from the chest until arms are extended."
					onChange={(value) => setEDescription(value as string)}
				/>
				<TextInput
					value={eType}
					label="Exercise Type"
					placeholder="Chest"
					onChange={(value) => setEType(value as ExerciseCategories)}
				/>
				<Button title="Save" onPress={handleSubmit} />
			</View>
		</View>
	)
}
