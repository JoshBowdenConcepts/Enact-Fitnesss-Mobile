import { useState } from 'react'
import { View, TouchableOpacity, Modal, Text } from 'react-native'
import {
	Picker,
	PickerProps,
	PickerItemProps,
} from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient'

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
			<Modal
				visible={showModal ? true : false}
				presentationStyle="overFullScreen"
				transparent>
				<LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.8)']}>
					<View
						style={{
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'flex-end',
						}}>
						<View
							style={{
								flexDirection: 'column',
								paddingHorizontal: 20,
								paddingBottom: 25,
								backgroundColor: 'white',
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
