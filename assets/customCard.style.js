import {Platform} from 'react-native';

export default {
	loginMethods: {
		wrapperStyle: {
			margin: 20,
			marginBottom: 10,
			marginTop: 0,
			flexDirection: 'column',
			padding: 0,
			width: 300,
		},
		titleStyle: {
			display: 'none'
		},
		dividerStyle: {
			display: 'none'
		},
		containerStyle: {
			marginTop: 20,
			padding: 0,
			elevation: 2,
			...Platform.select({
				ios: {
					shadowColor: 'rgba(0,0,0, .2)',
					shadowOffset: {height: 0, width: 0},
					shadowOpacity: 1,
					shadowRadius: 1,
				},
				android: {
					elevation: 4,
				},
			}),
			borderRadius: 5
		}

	},
	footerContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		height: 55
	}
}
