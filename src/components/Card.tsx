import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MoreHorizontal } from 'react-native-feather'
import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'

type CardProps = {
	title: string
	description?: string
	horizontal?: boolean
}

export const Card = ({ title, description, horizontal }: CardProps) => {
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
			}>
			<TouchableOpacity>
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
						}}>
						<Text style={globalStyles.h5}>{title}</Text>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.7}>
						<MoreHorizontal
							stroke={CONSTANTS.colors.body}
							style={globalStyles.icon}
						/>
					</TouchableOpacity>
				</View>
				{description && (
					<TouchableOpacity activeOpacity={0.7}>
						<Text style={[globalStyles.subText]}>{description}</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}
