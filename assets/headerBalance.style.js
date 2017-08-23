import theme from './variables';
import buttonStyle from '../assets/button.style';

export default {
	balanceButton: {
		...buttonStyle.transparent,
		buttonStyle: {
			...buttonStyle.transparent.buttonStyle,
			height: 20
		},
		icon:{
			name: 'arrow-down',
			type: 'font-awesome',
			color: theme.brandColor,
			size: 12
		}
	}

}
