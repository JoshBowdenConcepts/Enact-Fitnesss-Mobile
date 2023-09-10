import { useState } from 'react'
import {
	View,
	TouchableOpacity,
	Modal,
	Text,
	Dimensions,
	ScrollView,
} from 'react-native'

const windowHeight = Dimensions.get('window').height

import { Button } from './Button'

type ModalSelectProps = {
	selectedValue?: string
}

const Root = ({ selectedValue }: ModalSelectProps) => {
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
						paddingHorizontal: 20,
						paddingVertical: 25,
					}}>
					{/* Picker goes here flex grow 1 */}
					<ScrollView snapToAlignment="center"></ScrollView>
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

const PickerItem = () => {
	return <Text>Picker Item Goes Here</Text>
}

export const ModalSelect = Object.assign(Root, { Item: PickerItem })
