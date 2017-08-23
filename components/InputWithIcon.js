import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native'
import { FormInput, Icon } from 'react-native-elements'
import inputStyle from '../assets/input.style'
import theme from '../assets/variables'

export default class ImputWithIcon extends Component {
	constructor (props) {
		super(props)
	}

	static propTypes = {
		...FormInput.propTypes,
		password: PropTypes.bool
	};

	render () {
		return (
			<View>
				{this.props.inputIcon &&
				<Icon name={this.props.inputIcon}
					  type={this.props.type || 'font-awesome'}
					  color={this.props.iconColor || '#444'} containerStyle={{position: 'absolute', left:7, top:17}} size={18}/>}
				<FormInput {...inputStyle.withIcon} placeholder={this.props.placeholder} selectionColor={theme.brandColor} placeholderTextColor="#444" underlineColorAndroid="#ddd" secureTextEntry={this.props.password}/>
			</View>
		)
	}
}

ImputWithIcon.defaultProps = {
	password: false
};
