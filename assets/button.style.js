import theme from './variables';

const button = {
	buttonStyle: {
		marginLeft: 0,
		marginRight: 0,
		height: 40,
		borderRadius: 3
	},
	textStyle: {
		fontWeight: 'bold'
	},
	containerViewStyle: {
		paddingRight: 0,
		paddingLeft: 0,
		marginLeft: 0,
		marginRight: 0
	}
};


export default {
	transparent: {
		...button,
		buttonStyle: {
			...button.buttonStyle,
			backgroundColor: 'transparent',
		},
		textStyle: {
			...button.textStyle,
			color: theme.brandColor
		}
	},
	primary: {
		...button,
		buttonStyle: {
			...button.buttonStyle,
			backgroundColor: theme.primary,
		}

	},
	default: button
}

