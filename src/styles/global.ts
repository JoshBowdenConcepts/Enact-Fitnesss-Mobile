import { StyleSheet } from 'react-native'
import { CONSTANTS } from './constants'

export const globalStyles = StyleSheet.create({
	body: {
		fontFamily: 'HubotSans-Regular',
	},
	layer1: {
		backgroundColor: CONSTANTS.colors.white,
		borderRadius: CONSTANTS.borderRadius,
	},
	layer1Border: {
		borderColor: CONSTANTS.colors.gray,
		borderWidth: 1,
	},
	shadow: {
		shadowColor: CONSTANTS.colors.black,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 20,
	},
	h1: {
		fontFamily: 'MonaSansCondensed-Bold',
		fontSize: 32,
		marginBottom: CONSTANTS.spacing.large,
		fontWeight: '500',
		color: CONSTANTS.colors.text,
	},
	h2: {
		fontFamily: 'MonaSansCondensed-Bold',
		fontSize: 24,
		marginBottom: CONSTANTS.spacing.medium,
		fontWeight: '500',
		color: CONSTANTS.colors.text,
	},
	h3: {
		fontFamily: 'MonaSansCondensed-Bold',
		fontSize: 20,
		marginBottom: CONSTANTS.spacing.medium,
		fontWeight: '500',
		color: CONSTANTS.colors.text,
	},
	h4: {
		fontFamily: 'MonaSansCondensed-Bold',
		fontSize: 16,
		marginBottom: CONSTANTS.spacing.medium,
		fontWeight: '500',
		color: CONSTANTS.colors.text,
	},
	h5: {
		fontFamily: 'HubotSans-Bold',
		fontSize: 14,
		marginBottom: CONSTANTS.spacing.small,
		fontWeight: '500',
		color: CONSTANTS.colors.text,
	},
	subHeading: {
		fontFamily: 'HubotSans-Regular',
		fontSize: 12,
		marginBottom: CONSTANTS.spacing.small,
		fontWeight: '500',
		color: CONSTANTS.colors.text,
	},
	p: {
		fontFamily: 'HubotSans-Regular',
		fontSize: 14,
		fontWeight: '300',
	},
	subText: {
		fontFamily: 'HubotSans-Regular',
		fontSize: 12,
		fontWeight: '300',
		lineHeight: 16,
	},
	buttonText: {
		fontFamily: 'HubotSans-Regular',
		fontSize: 14,
		fontWeight: '300',
		lineHeight: 16,
		textTransform: 'uppercase',
	},
	tabBarLabel: {
		fontFamily: 'HubotSans-Regular',
		fontSize: 12,
		fontWeight: '300',
		paddingTop: CONSTANTS.spacing.medium,
	},
	icon: {
		height: CONSTANTS.icon.size,
		width: CONSTANTS.icon.size,
	},
})
