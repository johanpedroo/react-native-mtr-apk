import theme from './variables';

const profileText = {
	fontSize: 11
};

export default {
	userContainer:{
		flex: 1,
		flexDirection: 'row',
		marginLeft: 15
	},
	userIds: {
		marginLeft: 10,
		justifyContent: 'center'
	},
	welcomeText: {
		...profileText,
		fontWeight: 'bold',
		color: '#333'
	},
	documentText: {
		...profileText,
		fontWeight: 'bold',
		color: theme.brandColor
	}


}
