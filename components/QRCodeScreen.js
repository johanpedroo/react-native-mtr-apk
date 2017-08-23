import React, { Component } from 'react';
import {
	AppRegistry,
	Dimensions,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import Camera from 'react-native-camera';

export default class QRCodeScreen extends Component {
    constructor(props) {
		super(props);
		this.handleBarCode = this.handleBarCode.bind(this);
		this.state = {
			QrCode: undefined
		};
    }
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    onBarCodeRead={this.handleBarCode}>
					{this.state.QrCode && <Text style={styles.capture}>{this.state.QrCode}</Text>}
                </Camera>
            </View>
        );
    }
    handleBarCode (e) {
      this.setState({
		  QrCode: e.data
	  })
    }
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		color: '#000',
		padding: 10,
		margin: 40
	}
});
