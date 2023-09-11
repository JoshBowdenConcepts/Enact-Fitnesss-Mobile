import { useState, useEffect } from 'react'
import { Image, View, Alert, Text, ScrollView } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { EXERCISE_CATEGORIES, ExerciseCategories } from '../data/exercises'

import {
	ExerciseNavItems,
	ExerciseStackParamList,
} from '../navigators/ExerciseNavigator'

import { CONSTANTS } from '../styles/constants'
import { TextInput } from '../components/TextInput'
import { Button } from '../components/Button'
import { Dropdown } from '../components/Dropdown'
import { globalStyles } from '../styles/global'

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

	const returnWorkoutCategoryOptions = () => {
		const dropdownItems = []
		for (let category in EXERCISE_CATEGORIES) {
			dropdownItems.push(<Dropdown.Item label={category} value={category} />)
		}
		return dropdownItems
	}

	return (
		<ScrollView
			style={{
				marginBottom: 100,
			}}>
			<Image
				source={require('../../assets/workout.webp')}
				style={{
					aspectRatio: 1 / 0.7,
					width: '100%',
					height: undefined,
				}}
			/>
			<View style={{ padding: CONSTANTS.spacing.large, gap: 15 }}>
				{!name ? (
					<Text style={globalStyles.h2}>Create exercise</Text>
				) : (
					<Text style={globalStyles.h2}>Update exercise</Text>
				)}
				<TextInput
					value={eName}
					label="Name"
					accessibilityLabel="Exercise name"
					placeholder="Bench Press"
					onChange={(value) => setEName(value as string)}
				/>
				<TextInput
					value={eDescription}
					label="Description"
					accessibilityLabel="Exercise description"
					placeholder="Using a bench pressing a barbell with weight from the chest until arms are extended."
					onChange={(value) => setEDescription(value as string)}
					multiline
					numberOfLines={8}
					inputStyle={{
						height: 100,
					}}
				/>
				<Dropdown
					label="Type"
					accessibilityLabel="Exercise type"
					selectedValue={eType}
					onValueChange={(value) => setEType(value as ExerciseCategories)}>
					{Object.values(EXERCISE_CATEGORIES).map((category) => {
						return (
							<Dropdown.Item key={category} label={category} value={category} />
						)
					})}
				</Dropdown>
				<Button title="Save" onPress={handleSubmit} />
			</View>
		</ScrollView>
	)
}
