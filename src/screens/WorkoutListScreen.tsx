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

import Screen from '../components/Screen'
import { TextInput } from '../components/TextInput'
import { Card } from '../components/Card'

import { globalStyles } from '../styles/global'
import { CONSTANTS } from '../styles/constants'

import {
	WorkoutStackParamList,
	WorkoutNavItems,
} from '../navigators/WorkoutNavigator'

type Props = BottomTabScreenProps<WorkoutStackParamList, WorkoutNavItems.LIST>

export const WorkoutListScreen = ({ route, navigation }: Props) => {
	const [text, onChangeText] = useState('')

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
						accessibilityLabel="Search workouts"
						icon={(props) => <Icons.Search {...props} />}
						placeholder="Search for workouts"
						style={{
							flexGrow: 1,
						}}
					/>
					<TouchableOpacity
						accessibilityLabel="Create workout"
						onPress={() => {
							navigation.navigate(WorkoutNavItems.DATA, {})
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
			<View style={{ gap: 25 }}>
				<Card
					title="Just Ok Workout"
					description={
						'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.'
					}
					onPress={() =>
						navigation.navigate(WorkoutNavItems.DETAILS, {
							name: 'Just Ok Workout',
							description:
								'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
						})
					}
				/>
				<Card
					title="Awesome Workout"
					description={
						'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.'
					}
					onPress={() =>
						navigation.navigate(WorkoutNavItems.DETAILS, {
							name: 'Awesome Workout',
							description:
								'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
						})
					}
				/>
			</View>
		</Screen>
	)
}
