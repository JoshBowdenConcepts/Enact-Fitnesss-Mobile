import { useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import DraggableFlatList, {
	ScaleDecorator,
	RenderItemParams,
} from 'react-native-draggable-flatlist'
import { PlusSquare } from 'react-native-feather'
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
import { TextInput } from '../components/TextInput'

type Props = BottomTabScreenProps<WorkoutStackParamList, WorkoutNavItems.DATA>

export const WorkoutDataScreen = ({ route, navigation }: Props) => {
	// TODO: Replace this with Realm data once connected
	const [data, setData] = useState(exercises)

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
					margin: CONSTANTS.spacing.xlarge,
				}}>
				<Text
					style={[
						globalStyles.h1,
						{
							marginBottom: 0,
						},
					]}>
					Workout name:
				</Text>
				<View
					style={{
						flexDirection: 'row',
						flexBasis: 'auto',
						gap: 10,
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: CONSTANTS.spacing.large,
					}}>
					<TextInput
						accessibilityLabel="Workout name"
						onChange={() => null}
						value={route.params.name}
						style={{
							flexGrow: 1,
						}}
					/>
					<TouchableOpacity
						accessibilityLabel="Create exercise"
						onPress={() => {
							navigation.navigate(WorkoutNavItems.DATA, {
								name: route.params.name,
							})
							selectionAsync()
						}}
						style={{ justifyContent: 'center', alignItems: 'center' }}>
						<PlusSquare
							stroke={CONSTANTS.colors.body}
							style={{
								height: CONSTANTS.icon.large,
								width: CONSTANTS.icon.large,
							}}
						/>
					</TouchableOpacity>
				</View>
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
