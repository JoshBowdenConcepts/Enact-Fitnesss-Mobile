import { useState } from 'react'
import {
	Text,
	View,
	TouchableOpacity,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import * as Icons from 'react-native-feather'
import { selectionAsync } from 'expo-haptics'

import { globalStyles } from '../styles/global'
import { CONSTANTS } from '../styles/constants'

import {
	ExerciseNavItems,
	ExerciseStackParamList,
} from '../navigators/ExerciseNavigator'
import { exercises, Exercises } from '../data/exercises'

import Screen from '../components/Screen'
import { TextInput } from '../components/TextInput'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

type Props = BottomTabScreenProps<ExerciseStackParamList, ExerciseNavItems.LIST>

export const ExercisesScreen = ({ route, navigation }: Props) => {
	// TODO: Replace this with Realm data once connected
	const [data, setData] = useState(exercises)
	const [text, onChangeText] = useState('Text')

	const handleChange = (
		value: string | NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		onChangeText(value as string)
	}

	const renderItems = (items: Exercises[]) => {
		return items.map((item) => {
			return (
				<Card
					title={item.name}
					key={item.name}
					description={item.description}
					horizontal
					onPress={() =>
						navigation.navigate(ExerciseNavItems.DETAILS, {
							name: item.name,
							description: item.description,
							type: item.category,
						})
					}
				/>
			)
		})
	}

	return (
		<Screen
			title={route.name}
			preScrollChildren={
				<View
					style={{
						flexDirection: 'row',
						flexBasis: 'auto',
						gap: 10,
						alignItems: 'center',
						marginBottom: CONSTANTS.spacing.large,
					}}>
					<TextInput
						onChange={(value) => handleChange(value)}
						accessibilityLabel="Search exercises"
						icon={(props) => <Icons.Search {...props} />}
						placeholder="Search for exercises"
						style={{
							flexGrow: 1,
						}}
					/>
					<TouchableOpacity
						accessibilityLabel="Create exercise"
						onPress={() => {
							navigation.navigate(ExerciseNavItems.DATA, {})
							selectionAsync()
						}}
						style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Icons.PlusSquare
							stroke={CONSTANTS.colors.body}
							style={{
								height: CONSTANTS.icon.large,
								width: CONSTANTS.icon.large,
							}}
						/>
					</TouchableOpacity>
				</View>
			}>
			<Text style={globalStyles.h3}>Category</Text>
			<View style={{ gap: CONSTANTS.spacing.xlarge }}>{renderItems(data)}</View>
		</Screen>
	)
}
