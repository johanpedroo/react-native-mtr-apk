import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from 'react-native-elements';
import {View} from 'react-native';
import Tab from './Tab';
import InputWithIcon from './InputWithIcon';
import buttonStyles from '../assets/button.style';
import customCardStyles from '../assets/customCard.style';

export default class CustomCard extends Component {
	constructor(props){
		super(props);
		this.state = {
			activeMethod: 'CPF'
		};
		this.handlePressTab = this.handlePressTab.bind(this);
	}

	handlePressTab (value) {
		this.setState({
			activeMethod: value
		})
	}

	render () {
		const {login} = this.props;
		const loginMethods = ['CPF', 'E-MAIL', 'CELULAR'];

		return (
			<Card {...customCardStyles.loginMethods}>
				<View style={customCardStyles.headerContainer}>
					{loginMethods.map((value, i) => {
						return <Tab key={i} active={this.state.activeMethod} value={value} onPress={() => this.handlePressTab(value)}/>
					})}
				</View>
				<InputWithIcon inputIcon="user-circle" placeholder="Documento"/>
				<InputWithIcon inputIcon="lock" placeholder="Senha" password={true}/>
				<View style={customCardStyles.footerContainer}>
					<Button {...buttonStyles.transparent} title="ESQUECI A SENHA"/>
					<Button {...buttonStyles.primary} title="ENTRAR" onPress={login}/>
				</View>
			</Card>
		)
	}
}

CustomCard.propTypes = {
	onPress: PropTypes.func,
	login: PropTypes.func
};
