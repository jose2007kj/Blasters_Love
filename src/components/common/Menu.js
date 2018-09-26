import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Menu = ({ onPress, title, icon }) => {
    const { menuStyle, menuTextStyle, menuImageStyle } = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View 
                style={menuStyle}
            >
                <Image
                    style={menuImageStyle}
                    source={{ uri: icon }}
                    resizeMode="cover"
                />
                <Text style={menuTextStyle}>{title}</Text>
            </View>
             
        </TouchableOpacity>
    );
};

const styles = {
    menuStyle: {
        backgroundColor: 'rgba(0,0,0,.6)',
        padding: 10,
        paddingLeft: 15,
        flexDirection: 'row'
    },
    menuTextStyle: {
        fontSize: 20,
        color: '#f9f7f7',
        marginLeft: 10
    },
    menuImageStyle: {
        height: 25,
        width: 25
    }
};

export { Menu };

