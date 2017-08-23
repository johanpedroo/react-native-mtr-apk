import React from 'react';
import {View, Image, ScrollView, StatusBar} from 'react-native';
import {Text, Button} from 'react-native-elements';
import CustomCard from '../../components/CustomCard'

import styles from './style';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.submitLogin = this.submitLogin.bind(this);
	}

	submitLogin () {
		this.props.navigation.navigate('Home')
	}
	render() {
		return (
			<View style={{flex:1}}>
				<ScrollView contentContainerStyle={{flexGrow: 1}}>

					<View style={styles.container}>

						<Text style={styles.welcome} h4>Bem-vindo ao</Text>

						<Image style={styles.logo} source={require('../../assets/logo.png')}/>

						<Text style={styles.askAccount}>Ainda não tem sua conta?</Text>

						<Button title="CADASTRE-SE AGORA" {...styles.buttonSignUp} onPress={() => console.log('')}/>

						<CustomCard login={this.submitLogin}/>

					</View>
				</ScrollView>
				<Button {...styles.moreAbout} title="SAIBA MAIS"/>
			</View>
		);
	}
};
