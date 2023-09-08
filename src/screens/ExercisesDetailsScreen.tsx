import { Image, View, Text, TouchableOpacity } from 'react-native'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { Edit } from 'react-native-feather'
import * as Haptics from 'expo-haptics'

import {
	ExerciseNavItems,
	ExerciseStackParamList,
} from '../navigators/ExerciseNavigator'

import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'

type Props = BottomTabScreenProps<
	ExerciseStackParamList,
	ExerciseNavItems.DETAILS
>

export const ExerciseDetailsScreen = ({ route, navigation }: Props) => {
	const { name, description, type } = route.params
	return (
		<View>
			<Image
				source={require('../../assets/workout.webp')}
				style={{
					aspectRatio: 1 / 1,
					width: '100%',
					height: undefined,
				}}
			/>
			<View style={{ padding: CONSTANTS.spacing.large }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<Text
						style={[
							globalStyles.subHeading,
							{
								color: CONSTANTS.colors.body,
								textTransform: 'uppercase',
								letterSpacing: 1,
							},
						]}>
						{type}
					</Text>
					<TouchableOpacity
						onPress={() => {
							Haptics.selectionAsync()
							navigation.navigate(ExerciseNavItems.DATA, {
								name,
								description,
								type,
							})
						}}>
						<Edit stroke={CONSTANTS.colors.body} style={globalStyles.icon} />
					</TouchableOpacity>
				</View>
				<Text style={globalStyles.h1}>{name}</Text>
				{description && (
					<View>
						<Text style={globalStyles.p}>{description}</Text>
					</View>
				)}
			</View>
		</View>
	)
}
