import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigateToScreen('Main');
        }, 3000);
    }

    render() {
        const { backgroundImage, logo, container } = styles;
        return (
            <View style={container}>
                <Image 
                    source={require('../res/nav_header.jpg')}
                    style={backgroundImage}
                    resizeMode="cover"
                />
                <Image />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    logo: {
        height: 150,
        width: 150,
        position: 'absolute',
    
    }
};


export default connect(null, {
    navigateToScreen
})(SplashScreen);
