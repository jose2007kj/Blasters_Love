import React, { Component } from 'react';
import { View, Image,Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import * as style from './styles';

class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigateToScreen('Main');
        }, 2000);
    }

    render() {
        const { backgroundImage, logo, container } = styles;
        return (
            
            <View style={container}>
                <Image 
                    source={require('../res/nav_header.jpg')}
                    style={backgroundImage}
                    resizeMode="cover"
                /><LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
                ></LinearGradient>
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
