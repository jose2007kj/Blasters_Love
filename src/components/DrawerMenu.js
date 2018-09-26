import React, { Component } from 'react';
import { View,Image,Dimensions,Text } from 'react-native';
import { connect } from 'react-redux';
import { navigateToScreen } from '../actions';
import { Menu } from './common';

class DrawerMenu extends Component {

    componentWillMount(){
        console.log("--------inside drawer menu=======");
    }
    render() {
        return (
            <View style={styles.container}> 
            <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          
          resizeMode='cover'
          />
                {/* <View style={styles.headerView} >
                    <View style={styles.logoView}> 
                        <Image 
                            style={styles.logoImage}
                            source={require('../res/icons/logo.png')}
                        />
                        <Text style={styles.logoText}>Let's Cook</Text>
                    </View>
                </View> */}
            <View style={styles.items}>
                <Menu 
                title="News" 
                icon="icon_home" 
                onPress={() => this.props.navigateToScreen('News')} 
                />
                <Menu 
                title="Players" 
                icon="icon_home" 
                onPress={() => this.props.navigateToScreen('Players')} 
                />
                <Menu 
                title="Schedule" 
                icon="icon_home" 
                onPress={() => this.props.navigateToScreen('Schedule')} 
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
