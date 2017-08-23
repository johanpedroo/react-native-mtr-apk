import SplashScreen from './app/SplashScreen';
import {StackNavigator} from 'react-navigation';
import {StatusBar} from 'react-native';

import Login from './app/Login';
import Home from './app/Home';
import QrCodeScreen from './components/QRCodeScreen';

StatusBar.setHidden(true);

export default StackNavigator({
	SplashScreen: {screen: SplashScreen},
	Login: {screen: Login},
	Home: {screen: Home},
	Camera: {screen: QrCodeScreen}
},{
	navigationOptions:{header: false}
});
