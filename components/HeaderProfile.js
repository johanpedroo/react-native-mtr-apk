import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import headerProfileStyle from '../assets/headerProfile.style';

export default class HeaderProfile extends Component {
	constructor(props){
		super(props)
	}

	render () {
		return (
			<View style={headerProfileStyle.userContainer}>
				<Icon name="user-circle" type="font-awesome" color="#999" size={22}/>
				<View style={headerProfileStyle.userIds}>
					<Text style={headerProfileStyle.welcomeText}>Olá, Johan Pedro</Text>
					<Text style={headerProfileStyle.documentText}>088.253.259-67</Text>
				</View>
			</View>
		)
	}
}



