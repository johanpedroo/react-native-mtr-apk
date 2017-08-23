import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';

import headerBalanceStyle from '../assets/headerBalance.style';
import buttonStyle from '../assets/button.style';


export default class HeaderBalance extends Component {
	constructor(props){
		super(props)
	}

	render () {
		const {onPress} = this.props;
		return (
			<Button iconRight {...headerBalanceStyle.balanceButton} title="ver saldo" onPress={onPress}/>
		)
	}
}
HeaderBalance.propTypes = {
	onPress: PropTypes.func
};
