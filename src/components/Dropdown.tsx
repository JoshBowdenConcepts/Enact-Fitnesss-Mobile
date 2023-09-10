import { useState } from 'react'
import { View, TouchableOpacity, Modal, Text } from 'react-native'
import {
	Picker,
	PickerProps,
	PickerItemProps,
} from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient'
import { ChevronDown } from 'react-native-feather'

import { CONSTANTS } from '../styles/constants'
import { globalStyles } from '../styles/global'

import { Button } from './Button'

type DropdownProps = {
	label?: string
} & PickerProps

const Root = ({ selectedValue, label, ...props }: DropdownProps) => {
	const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<View>
			{label && <Text style={globalStyles.subHeading}>{label}</Text>}
			<TouchableOpacity
				style={{
					height: 50,
					paddingHorizontal: 20,
					flexGrow: 1,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: CONSTANTS.colors.white,
					borderColor: CONSTANTS.colors.gray,
					borderWidth: 1,
					borderRadius: CONSTANTS.borderRadius,
				}}
				onPress={() => {
					setShowModal(true)
				}}>
				<Text>{selectedValue}</Text>
				<ChevronDown
					stroke={CONSTANTS.colors.body}
					height={CONSTANTS.icon.size}
					width={CONSTANTS.icon.size}
				/>
			</TouchableOpacity>
			<Modal
				visible={showModal ? true : false}
				presentationStyle="overFullScreen"
				transparent>
				<LinearGradient
					colors={[
						CONSTANTS.gradients.modal.start,
						CONSTANTS.gradients.modal.end,
					]}>
					<View
						style={{
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'flex-end',
						}}>
						<View
							style={{
								flexDirection: 'column',
								paddingHorizontal: CONSTANTS.action.spacing.horizontal,
								paddingBottom: CONSTANTS.action.spacing.horizontal,
								backgroundColor: CONSTANTS.colors.white,
							}}>
							<Picker
								style={{
									flexGrow: 1,
								}}
								selectedValue={selectedValue}
								{...props}
							/>
							<Button
								title="Save"
								onPress={() => {
									setShowModal(false)
								}}
							/>
						</View>
					</View>
				</LinearGradient>
			</Modal>
		</View>
	)
}

const PickerItem = ({ ...props }: PickerItemProps) => {
	return <Picker.Item {...props} />
}

export const Dropdown = Object.assign(Root, { Item: PickerItem })
