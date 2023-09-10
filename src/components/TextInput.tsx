import { useState, useEffect, createElement } from 'react'
import {
	TextInput as RNTextInput,
	TextInputProps,
	TextStyle,
	View,
	Text,
	TouchableOpacity,
	StyleProp,
	ViewProps,
} from 'react-native'
import { SvgProps } from 'react-native-svg'

import { X } from 'react-native-feather'

import { RequireAtLeastOne } from '../helperTypes'
import { globalStyles } from '../styles/global'
import { CONSTANTS } from '../styles/constants'

type SearchInputPropsBefore = {
	onChange: (value: string) => void
	accessibilityLabel: string
	label?: string
	style?: StyleProp<ViewProps>
	inputStyle?: StyleProp<TextStyle>
	icon?: (props: SvgProps) => JSX.Element
} & TextInputProps

type SearchInputProps = RequireAtLeastOne<
	SearchInputPropsBefore,
	'accessibilityLabel' | 'label'
>

export const TextInput = ({
	onChange,
	accessibilityLabel,
	label,
	icon,
	style,
	inputStyle,
	value,
	multiline,
	...props
}: SearchInputProps) => {
	const [text, onChangeText] = useState(value)
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		onChange(text as string)
	}, [onChange, text])

	return (
		<View style={style}>
			{label && <Text style={globalStyles.subHeading}>{label}</Text>}
			<View
				style={[
					globalStyles.layer1,
					globalStyles.layer1Border,
					{
						flexDirection: 'row',
						alignItems: multiline ? 'flex-start' : 'center',
						paddingHorizontal: CONSTANTS.spacing.medium,
						paddingVertical: multiline
							? CONSTANTS.spacing.medium
							: CONSTANTS.spacing.xsmall,
						width: 'auto',
					},
					isFocused && {
						borderColor: CONSTANTS.colors.accent,
					},
				]}>
				{icon &&
					createElement(icon, {
						color: CONSTANTS.colors.body,
						height: CONSTANTS.icon.size,
						width: CONSTANTS.icon.size,
					})}
				<RNTextInput
					accessibilityLabel={accessibilityLabel}
					onChangeText={(value) => onChangeText(value)}
					value={text}
					style={[
						{
							height: 40,
							paddingHorizontal: 10,
							flexGrow: 1,
						},
						inputStyle,
					]}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					multiline={multiline}
					placeholderTextColor={
						label ? CONSTANTS.colors.gray : CONSTANTS.colors.body
					}
					{...props}
				/>
				{text && isFocused && (
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
		</View>
	)
}
