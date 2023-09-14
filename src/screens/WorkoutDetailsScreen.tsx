import { useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import DraggableFlatList, {
	ScaleDecorator,
	RenderItemParams,
} from 'react-native-draggable-flatlist'

import {
	WorkoutStackParamList,
	WorkoutNavItems,
} from '../navigators/WorkoutNavigator'
// import { ExerciseNavItems } from '../navigators/ExerciseNavigator'
import { Exercises, EXERCISE_CATEGORIES } from '../data/exercises'
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
	const initialData: Exercises[] = [
		{
			name: 'Something Cool',
			category: EXERCISE_CATEGORIES.ARMS,
			description:
				'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
		},
		{
			name: 'TRX Pushup',
			category: EXERCISE_CATEGORIES.CHEST,
			description:
				'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
		},
		{
			name: 'Lat Pull Down',
			category: EXERCISE_CATEGORIES.BACK,
			description:
				'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
		},
		{
			name: 'Leg Lift',
			category: EXERCISE_CATEGORIES.ABS,
			description:
				'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
		},
	]

	const [data, setData] = useState(initialData)

	const renderItem = ({
		item,
		drag,
		isActive,
	}: RenderItemParams<Exercises>) => {
		return (
			<ScaleDecorator>
				<View style={{ marginBottom: CONSTANTS.spacing.xlarge }}>
					<Card
						title={item.name}
						key={item.name}
						description={item.description}
						horizontal
						onLongPress={drag}
						disabled={isActive}
						// onPress={() =>
						// 	navigation.navigate(ExerciseNavItems.DETAILS, {
						// 		name: 'Something Cool',
						// 		description:
						// 			'A short description here. This could wrap if I needed it to as well. But I would want to ensure line height. More text to see how far I need to go before I truncate the text.',
						// 		type: 'Arms',
						// 	})
						// }
					/>
				</View>
			</ScaleDecorator>
		)
	}

	return (
		<SafeAreaView>
			<View
				style={{
					padding: CONSTANTS.spacing.xlarge,
				}}>
				<Text style={globalStyles.h1}>{route.params.name}</Text>
				<DraggableFlatList
					data={data}
					onDragEnd={({ data }) => setData(data)}
					keyExtractor={(item) => item.name}
					renderItem={renderItem}
				/>
			</View>
		</SafeAreaView>
	)
}
