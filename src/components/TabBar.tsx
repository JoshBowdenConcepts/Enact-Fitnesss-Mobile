import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import * as Icon from 'react-native-feather'
import * as Haptics from 'expo-haptics'

import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'

type IconType = typeof Icon.Activity

export const TabBar = ({
	state,
	descriptors,
	navigation,
}: BottomTabBarProps) => {
	return (
		<View style={styles.tabBar} data-color-mode="dark">
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name

				const Icon = options.tabBarIcon as IconType

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					})

					Haptics.selectionAsync()

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name)
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					})
				}

				return (
					<TouchableOpacity
						key={label + ''}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={[
							{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								paddingVertical: CONSTANTS.spacing.medium,
							},
							isFocused && {
								borderTopWidth: 2,
								borderColor: CONSTANTS.colors.accent,
							},
						]}>
						<Icon
							stroke={
								isFocused ? CONSTANTS.colors.accent : CONSTANTS.colors.text
							}
							width={CONSTANTS.icon.size}
							height={CONSTANTS.icon.size}
						/>
						<Text
							style={[
								globalStyles.tabBarLabel,
								{
									color: isFocused
										? CONSTANTS.colors.accent
										: CONSTANTS.colors.text,
								},
							]}>
							{label + ''}
						</Text>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 25,
		left: 20,
		right: 20,
		backgroundColor: 'white',
		borderRadius: CONSTANTS.borderRadius,
		paddingHorizontal: CONSTANTS.spacing.large,
		// paddingVertical: CONSTANTS.spacing.medium,
		// borderColor: CONSTANTS.colors.gray,
		// borderWidth: 1,
	},
})
