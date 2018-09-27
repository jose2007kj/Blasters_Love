import React, { Component } from 'react';
import { View,Image,Dimensions,Text } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';
import { Menu } from './common';

class DrawerMenu extends Component {

    
    render() {
        return (
            <View style={styles.container}> 
            <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          
          resizeMode='cover'
          />
            <View style={styles.items}>
                <Menu 
                title="News" 
                icon="newspaper" 
                onPress={() => this.props.navigateToScreen('News')} 
                />
                <Menu 
                title="Players" 
                icon="group" 
                onPress={() => this.props.navigateToScreen('Players')} 
                />
                <Menu 
                title="Schedule" 
                icon="schedule" 
                onPress={() => this.props.navigateToScreen('Schedule')} 
                />
                <Menu 
                title="Standings" 
                icon="standing" 
                onPress={() => this.props.navigateToScreen('Standing')} 
                />
            </View></View>
            
        
        );
    }   
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
    },
    headerView: {
        height: 210,
        backgroundColor: '#b3181c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    logoImage: {
        height: 50,
        width: 50,
       
    },
    logoText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'KaushanScript-Regular',
        marginTop: 6
    },
    items:{
        marginTop:220
    }
};
const mapStateToProps = (state) => {
    return {
        menu: state.navigation.menu
    };
};

export default connect(mapStateToProps, { navigateToScreen })(DrawerMenu);
