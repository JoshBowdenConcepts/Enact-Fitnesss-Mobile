import {
	SafeAreaView,
	ScrollView,
	Text,
	View,
	Dimensions,
	StyleProp,
	ViewStyle,
} from 'react-native'

import { CONSTANTS } from '../styles/constants'

const windowHeight = Dimensions.get('window').height

type ScreenProps = {
	children: React.ReactNode
	title?: string
	style?: StyleProp<ViewStyle>
}

export default function Screen({ children, title, style }: ScreenProps) {
	return (
		<SafeAreaView>
			<View
				style={[
					{
						padding: 20,
					},
					style,
				]}>
				{title && (
					<Text
						style={{
							fontFamily: 'MonaSansCondensed-Bold',
							fontSize: 32,
							marginBottom: 10,
							fontWeight: '500',
							color: CONSTANTS.colors.text,
						}}>
						{title}
					</Text>
				)}
				<ScrollView style={{ minHeight: windowHeight }}>{children}</ScrollView>
			</View>
		</SafeAreaView>
	)
}
