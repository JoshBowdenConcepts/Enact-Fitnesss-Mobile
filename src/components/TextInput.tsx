import { useState, useEffect, createElement } from 'react'
import {
	TextInput as RNTextInput,
	TextInputProps,
	View,
	TouchableOpacity,
} from 'react-native'
import { SvgProps } from 'react-native-svg'

import { X } from 'react-native-feather'

import { globalStyles } from '../styles/global'
import { CONSTANTS } from '../styles/constants'

type SearchInputProps = {
	onChange: (value: string) => void
	accessibilityLabel: string
	icon?(props: SvgProps): JSX.Element
} & TextInputProps

export const TextInput = ({
	onChange,
	accessibilityLabel,
	icon,
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
				{
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 10,
					paddingVertical: 2,
					borderColor: CONSTANTS.colors.black,
					borderWidth: 1,
					borderRadius: 10,
					width: '100%',
					backgroundColor: 'white',
				},
				isFocused && {
					borderColor: CONSTANTS.colors.accent,
				},
			]}>
			{icon && createElement(icon, { color: CONSTANTS.colors.black })}
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
				{...props}
			/>
			{text && (
				<TouchableOpacity
					accessibilityLabel="Cancel"
					onPress={() => onChangeText('')}>
					<X stroke={CONSTANTS.colors.black} />
				</TouchableOpacity>
			)}
		</View>
	)
}
