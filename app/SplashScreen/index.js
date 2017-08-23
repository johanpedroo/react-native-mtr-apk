import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';

import styles from './style';

export default class SplashScreen extends Component {
	constructor (props) {
		super(props)
	}
	componentDidMount () {
	}
	render () {
		setTimeout(() => {
			this.props.navigation.navigate('Login');
		}, 3000);
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>
					Raízen
				</Text>
			</View>
		)
	}
}
