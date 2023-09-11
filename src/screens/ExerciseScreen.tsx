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

import Screen from '../components/Screen'
import { TextInput } from '../components/TextInput'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

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
						<Icons.Edit
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
			<View style={{ gap: 25 }}>
				<Card
					title="Something Cool"
					description={
						'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.'
					}
					horizontal
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
