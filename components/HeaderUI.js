import { Text, TouchableOpacity, View } from "react-native";
import React, {Component} from "react";
import { colors, fontSizes } from "../constants";


function HeaderUI(props) {
	const {title} = props
	return <View style={{
		height: 55,
		backgroundColor: colors.primary,
	}}>
		<Text style={{
			fontSize: fontSizes.h2,
			alignSelf: 'center',
			lineHeight: 45,
			color: 'white'
		}}>{title}</Text>
	</View>
}

export default HeaderUI
