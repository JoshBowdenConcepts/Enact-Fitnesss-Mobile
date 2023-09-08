import { useState, useEffect, createElement } from 'react'
import {
	TextInput as RNTextInput,
	TextInputProps,
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
	value,
	...props
}: SearchInputProps) => {
	const [text, onChangeText] = useState(value)
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		onChange(text as string)
	}, [onChange, text])

	return (
		<View>
			{label && <Text style={globalStyles.subHeading}>{label}</Text>}
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
						marginBottom: CONSTANTS.spacing.large,
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
					onChangeText={(value) => onChangeText(value)}
					value={text}
					style={{
						height: 40,
						paddingHorizontal: 10,
						flexGrow: 1,
					}}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
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
