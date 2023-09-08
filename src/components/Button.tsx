import { TouchableHighlight, View, Text } from 'react-native'
import * as Haptics from 'expo-haptics'
import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'

type ButtonProps = {
	onPress: () => void
	title: string
}

export const Button = ({ onPress, title }: ButtonProps) => {
	return (
		<TouchableHighlight
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
