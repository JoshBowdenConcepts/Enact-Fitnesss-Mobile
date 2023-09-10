import { useState } from 'react'
import { View, TouchableOpacity, Modal, Text, Dimensions } from 'react-native'
import {
	Picker,
	PickerProps,
	PickerItemProps,
} from '@react-native-picker/picker'

const windowHeight = Dimensions.get('window').height

import { Button } from './Button'

const Root = ({ selectedValue, ...props }: PickerProps) => {
	const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<View>
			<TouchableOpacity
				style={{
					height: 40,
					paddingHorizontal: 10,
					flexGrow: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				onPress={() => {
					setShowModal(true)
				}}>
				<Text>{selectedValue}</Text>
			</TouchableOpacity>
			<Modal visible={showModal ? true : false}>
				<View
					style={{
						height: windowHeight,
						flexDirection: 'column',
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
			</Modal>
		</View>
	)
}

const PickerItem = ({ ...props }: PickerItemProps) => {
	return <Picker.Item {...props} />
}

export const Dropdown = Object.assign(Root, { Item: PickerItem })
