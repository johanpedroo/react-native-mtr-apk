import theme from '../../assets/variables';
import { Platform } from 'react-native';
export default {
	container: {
		flex: 1,
		backgroundColor: '#F1F5F8',
		alignItems: 'center',
	},
	welcome: {
		alignSelf: 'center',
		color: '#777',
		fontSize: 19,
		marginTop: 40
	},
	logo: {
		width: 200,
		height: 60,
		resizeMode: 'contain',
		marginTop: 10
	},
	askAccount: {
		color: '#777',
		marginTop: 10,
		fontSize: 15
	},
	buttonSignUp: {
		textStyle: {
			textAlign: 'center',
			width: 250
		},
		buttonStyle: {
			backgroundColor: theme.brandColor,
			borderRadius: 3,
			marginTop: 20,
			marginLeft: 30,
			marginRight: 30,
			height: 30
		}
	},
	moreAbout: {
		buttonStyle: {
			backgroundColor: '#fff',
			marginLeft: 0,
			marginRight: 0,
			height: 50,
			width: '100%',
			borderTopWidth: 2,
			borderColor: '#ddd'
		},
		textStyle: {
			color: theme.brandColor,
			fontWeight: 'bold'
		},
		containerViewStyle: {
			padding: 0,
			marginLeft: 0,
			marginRight: 0
		}
	},
	loginInput: {
		containerStyle:{
			width: '100%',
			marginLeft:0
		},
		inputStyle: {
			paddingLeft: 30
		}
	}
};
