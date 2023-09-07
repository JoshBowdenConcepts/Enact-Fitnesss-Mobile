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

import { globalStyles } from '../styles/global'

const windowHeight = Dimensions.get('window').height

type ScreenProps = {
	children: React.ReactNode
	preScrollChildren?: React.ReactNode
	title?: string
	style?: StyleProp<ViewStyle>
}

export default function Screen({
	children,
	preScrollChildren,
	title,
	style,
}: ScreenProps) {
	return (
		<SafeAreaView>
			<View
				style={[
					{
						padding: CONSTANTS.spacing.xlarge,
					},
					style,
				]}>
				{title && <Text style={globalStyles.h1}>{title}</Text>}
				{preScrollChildren && preScrollChildren}
				<ScrollView style={{ minHeight: windowHeight }}>{children}</ScrollView>
			</View>
		</SafeAreaView>
	)
}
