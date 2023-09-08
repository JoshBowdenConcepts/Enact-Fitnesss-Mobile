import { View, Text, Image, TouchableOpacity, ViewProps } from 'react-native'
import { MoreHorizontal } from 'react-native-feather'
import * as Haptics from 'expo-haptics'

import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'
import { truncate } from '../helpers/truncate'

type CardProps = {
	title: string
	description?: string
	horizontal?: boolean
	onPress?: () => void
} & ViewProps

export const Card = ({
	title,
	description,
	horizontal,
	onPress,
	...props
}: CardProps) => {
	return (
		<View
			style={
				horizontal && {
					width: '100%',
					flexDirection: 'row',
					gap: 10,
					alignContent: 'flex-start',
					justifyContent: 'flex-start',
				}
			}
			{...props}>
			<TouchableOpacity
				onPress={() => {
					Haptics.selectionAsync()
					onPress && onPress()
				}}>
				<Image
					source={require('../../assets/workout.webp')}
					style={{
						aspectRatio: horizontal ? 4 / 3 : 16 / 7,
						width: horizontal ? 100 : '100%',
						height: undefined,
						borderRadius: CONSTANTS.borderRadius,
					}}
				/>
			</TouchableOpacity>
			<View
				style={
					horizontal && {
						flexGrow: 1,
						width: 100,
					}
				}>
				<View
					style={[
						{ flexDirection: 'row', marginTop: CONSTANTS.spacing.medium },
						horizontal && {
							marginTop: 0,
							width: '100%',
						},
					]}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={{
							flexGrow: 1,
							justifyContent: 'center',
						}}
						onPress={() => {
							Haptics.selectionAsync()
							onPress && onPress()
						}}>
						<Text style={globalStyles.h5}>{title}</Text>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.7} accessibilityLabel="More">
						<MoreHorizontal
							stroke={CONSTANTS.colors.body}
							style={globalStyles.icon}
						/>
					</TouchableOpacity>
				</View>
				{description && (
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => {
							Haptics.selectionAsync()
							onPress && onPress()
						}}>
						<Text style={[globalStyles.subText]}>
							{truncate(description, 110)}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}
