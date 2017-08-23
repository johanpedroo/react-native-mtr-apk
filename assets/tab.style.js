import theme from './variables'
export default {
	tab: (active = false) => {
		return {
			buttonStyle: {
				borderBottomWidth: 3,
				borderBottomColor: active? theme.brandColor : '#eee',
				backgroundColor: 'transparent',
				marginLeft: 0,
				marginRight: 0,
				height: 50
			},
			textStyle: {
				color: theme.brandColor,
				fontWeight: 'bold'
			},
			containerViewStyle: {
				flex: 1,
				padding: 0,
				marginLeft: 0,
				marginRight: 0,
				height: 55
			}
		}

	}
}
