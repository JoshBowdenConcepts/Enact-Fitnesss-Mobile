import { StyleSheet } from 'react-native'
import { CONSTANTS } from './constants'

export const globalStyles = StyleSheet.create({
	body: {
		fontFamily: 'HubotSans-Regular',
	},
	shadow: {
		shadowColor: CONSTANTS.colors.black,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 20,
	},
})
