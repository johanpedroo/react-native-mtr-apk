import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Text, Header, Button} from 'react-native-elements';
import HeaderProfile from '../../components/HeaderProfile'
import HeaderBalance from '../../components/HeaderBalance'
import TabsMenu from '../../components/TabsMenu'
import buttonStyle from '../../assets/button.style'
import styles from './style'
export default class Home extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<View style={{flex: 1}}>
				<Header
					statusBarProps={{ barStyle: 'light-content' }}
					leftComponent={<HeaderProfile/>}
					rightComponent={<HeaderBalance onPress={() => console.log('aaaa')}/>}
					{...styles.header}
					icon={{name: 'arrow-down', type: 'font-awesome'}}/>
				<View style={{marginTop: 80, flex: 1}}>
					<ScrollView style={{flexGrow: 1}}>
						<View>
							<Button {...buttonStyle.transparent} title="Ler Qr code" onPress={() => this.props.navigation.navigate('Camera')}/>
						</View>
					</ScrollView>
				</View>
				<TabsMenu/>
			</View>
		)
	}
}
