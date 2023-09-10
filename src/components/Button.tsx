import {
	TouchableHighlight,
	View,
	Text,
	StyleProp,
	ViewStyle,
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'

type ButtonProps = {
	onPress: () => void
	title: string
	style?: StyleProp<ViewStyle>
}

export const Button = ({ onPress, title, style }: ButtonProps) => {
	return (
		<TouchableHighlight
			style={style}
			onPress={() => {
				Haptics.selectionAsync()
				onPress()
			}}>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: CONSTANTS.colors.black,
					justifyContent: 'space-around',
					paddingVertical: CONSTANTS.spacing.large,
					borderRadius: CONSTANTS.borderRadius,
					width: 'auto',
					flexShrink: 1,
				}}>
				{title && (
					<Text
						style={[
							globalStyles.buttonText,
							{ color: CONSTANTS.colors.white },
						]}>
						{title}
					</Text>
				)}
			</View>
		</TouchableHighlight>
	)
}
