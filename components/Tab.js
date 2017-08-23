import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';
import tabStyle from '../assets/tab.style';

export default class Tab extends Component {
	constructor(props){
		super(props)
	}

	render () {
		return (
			<Button
				{...this.props}
				{...tabStyle.tab(this.props.active === this.props.value)}
				{...this.props.tabStyle}
				title={this.props.value}
				onPress={() => this.props.onPress(this.props.value)}/>
		)
	}
}

Tab.propTypes = {
	...Button.propTypes,
	active: PropTypes.string,
	tabStyle: PropTypes.object
};

