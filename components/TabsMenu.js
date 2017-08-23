import React, { Component } from 'react';
import { View } from 'react-native';
import Tab from '../components/Tab';
import tabsMenuStyle from '../assets/tabsMenu.style';

export default class TabsMenu extends Component {
	constructor(props){
		super(props)
	}

	render () {
		console.log(this.props);
		const tabIcon = (icon, type = 'font-awesome') => {
			return {
				name: icon,
				type: type,
				size: 22,
				style: tabsMenuStyle.tabIcon
			}
		};
		const tabs = [
			{name : 'Início', icon: 'home'},
			{name : 'Pagar', icon: 'credit-card'},
			{name : 'P/R', icon: 'area-chart'},
			{name : 'Logout', icon: 'lock'}
		];
		return (
			<View style={tabsMenuStyle.container}>
				{tabs.map((tab, i) => {
					return <Tab
								key={i}
								icon={tabIcon(tab.icon)}
								value={tab.name}
								tabStyle={tabsMenuStyle.menuButton}
								onPress={() => console.log(tab.name)}/>
				})}
			</View>
		)
	}
}
