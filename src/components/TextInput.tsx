import { useState, useEffect, createElement } from 'react'
import {
	TextInput as RNTextInput,
	TextInputProps,
	View,
	TouchableOpacity,
	StyleProp,
	ViewProps,
} from 'react-native'
import { SvgProps } from 'react-native-svg'

import { X } from 'react-native-feather'

import { globalStyles } from '../styles/global'
import { CONSTANTS } from '../styles/constants'

type SearchInputProps = {
	onChange: (value: string) => void
	accessibilityLabel: string
	style?: StyleProp<ViewProps>
	icon?: (props: SvgProps) => JSX.Element
} & TextInputProps

export const TextInput = ({
	onChange,
	accessibilityLabel,
	icon,
	style,
	...props
}: SearchInputProps) => {
	const [text, onChangeText] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		onChange(text as string)
	}, [onChange, text])

	return (
		<View
			style={[
				globalStyles.layer1,
				globalStyles.layer1Border,
				{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: CONSTANTS.spacing.medium,
					paddingVertical: CONSTANTS.spacing.xsmall,
					width: '100%',
				},
				isFocused && {
					borderColor: CONSTANTS.colors.accent,
				},
				style && style,
			]}>
			{icon &&
				createElement(icon, {
					color: CONSTANTS.colors.body,
					height: 24,
					width: 24,
				})}
			<RNTextInput
				accessibilityLabel={accessibilityLabel}
				onChangeText={onChangeText}
				value={text}
				style={{
					height: 40,
					paddingHorizontal: 10,
					flexGrow: 1,
				}}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholderTextColor={CONSTANTS.colors.body}
				{...props}
			/>
			{text && (
				<TouchableOpacity
					accessibilityLabel="Cancel"
					onPress={() => onChangeText('')}>
					<X
						stroke={CONSTANTS.colors.body}
						height={CONSTANTS.icon.size}
						width={CONSTANTS.icon.size}
					/>
				</TouchableOpacity>
			)}
		</View>
	)
}
