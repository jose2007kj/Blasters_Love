import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Menu = ({ onPress, title, icon }) => {
    const { menuStyle, menuTextStyle, menuImageStyle } = styles;
    let icons = {
        'newspaper': require('../../res/icons/newspaper.png')
        ,'group': require('../../res/icons/group.png')
        ,'schedule': require('../../res/icons/schedule.png')
        ,'standing': require('../../res/icons/list.png')
      }
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View 
                style={menuStyle}
            >
                <Image
                    style={menuImageStyle}
                    source={icons[icon]}
                    resizeMode="cover"
                />
                <Text style={menuTextStyle}>{title}</Text>
            </View>
             
        </TouchableOpacity>
    );
};

const styles = {
    menuStyle: {
         borderColor:'#0091EA', margin:5, borderWidth:3,
        padding: 10,
        paddingLeft: 35,
        flexDirection: 'row'
    },
    menuTextStyle: {
        fontSize: 20,
        color: '#f9f7f7',
        marginLeft: 30
    },
    menuImageStyle: {
        height: 25,
        width: 25
    }
};

export { Menu };

