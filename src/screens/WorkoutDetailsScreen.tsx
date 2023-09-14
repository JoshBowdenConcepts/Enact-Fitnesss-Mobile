import { useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { Edit } from 'react-native-feather'
import { selectionAsync } from 'expo-haptics'

import {
	WorkoutStackParamList,
	WorkoutNavItems,
} from '../navigators/WorkoutNavigator'
// import { ExerciseNavItems } from '../navigators/ExerciseNavigator'
import { Exercises, exercises } from '../data/exercises'
import { globalStyles } from '../styles/global'
import { CONSTANTS } from '../styles/constants'

import { Card } from '../components/Card'
import Screen from '../components/Screen'

type Props = BottomTabScreenProps<
	WorkoutStackParamList,
	WorkoutNavItems.DETAILS
>

export const WorkoutDetailsScreen = ({ route, navigation }: Props) => {
	// TODO: Replace this with Realm data once connected
	const [data, setData] = useState(exercises)

	const renderItems = (items: Exercises[]) => {
		return items.map((item) => {
			return (
				<Card
					title={item.name}
					key={item.name}
					description={item.description}
					horizontal
					// onPress={() =>
					// 	navigation.navigate(ExerciseNavItems.DETAILS, {
					// 		name: 'Something Cool',
					// 		description:
					// 			'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
					// 		type: 'Arms',
					// 	})
					// }
				/>
			)
		})
	}

	return (
		<SafeAreaView>
			<View
				style={{
					margin: CONSTANTS.spacing.xlarge,
				}}>
				<View
					style={{
						flexDirection: 'row',
						flexBasis: 'auto',
						gap: 10,
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: CONSTANTS.spacing.large,
					}}>
					<Text
						style={[
							globalStyles.h1,
							{
								marginBottom: 0,
							},
						]}>
						{route.params.name}
					</Text>
					<TouchableOpacity
						accessibilityLabel="Create exercise"
						onPress={() => {
							navigation.navigate(WorkoutNavItems.DATA, {
								name: route.params.name,
							})
							selectionAsync()
						}}
						style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Edit
							stroke={CONSTANTS.colors.body}
							style={{
								height: CONSTANTS.icon.large,
								width: CONSTANTS.icon.large,
							}}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						gap: CONSTANTS.spacing.xlarge,
					}}>
					{renderItems(data)}
				</View>
			</View>
		</SafeAreaView>
	)
}
