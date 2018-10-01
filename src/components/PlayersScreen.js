/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions,StyleSheet,FlatList,Image, Text, View,ActivityIndicator,ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import * as style from './styles';
import {fetchPlayers,navigateToScreen,savePlayers,fetchPlayersStart,getSavedPlayers} from '../actions';

var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class PlayersScreen extends Component{
    componentWillMount(){
      this.props.fetchPlayersStart();
    }
    componentDidMount() {
        
        this.props.fetchPlayers();
       }
 onItemPressed(item) {
  this.props.navigateToScreen('Player Details', item);
}
onReloadPressed(){
  this.props.fetchPlayersStart();
  this.props.fetchPlayers();
}
  render() {
    switch (this.props.fetch_status) {
      case 'loading':
          return <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
          <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
                ></LinearGradient>
          <ActivityIndicator size={'large'} />
      </View>
      case 'success':
      this.props.savePlayers(this.props.players);  
    return(
            <View style={styles.container} >
                <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
          <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
                ></LinearGradient>
                <FlatList
                data={this.props.players.data.squads.squad.players}
                showsVerticalScrollIndicator={false}
                
                renderItem={({item}) =>
                <View style={styles.flatview}>
                  
                  
                  <ImageBackground borderRadius={20}
              style={{flex:1,padding:1,height:height*0.45,opacity:0.8,backgroundColor: 'rgba(0,0,0,.6)'}}
              source={{uri: 'https://www.indiansuperleague.com/static-resources/images/players/small/0/'+item.player_id+'.png?v=1.93'}}>
            <Text style={styles.newsText}>{item.full_name}</Text>
            <View style={styles.buttonView}><Button title="Read more"
            onPress={() => this.onItemPressed(item)}
      buttonStyle={{backgroundColor: "#0091EA",
      width: width*0.3,
      height: 0.09,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 20}}
      containerStyle={{ marginTop: 100 }}/></View>
            </ImageBackground>
                </View>
                }
                keyExtractor={item => item.full_name}
                
                
              />
            </View>
          )
      default:
      this.props.getSavedPlayers();
      if(this.props.players_cache!=null) {
        return(
            <View style={styles.container} >
              <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
          <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
                ></LinearGradient>
               <FlatList
                data={this.props.players_cache.data.squads.squad.players}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View style={styles.flatview}> 
                <ImageBackground borderRadius={20}
                style={{flex:1,padding:1,height:height*0.45,opacity:0.8,backgroundColor: 'rgba(0,0,0,.6)'}}
                source={{uri: 'https://www.indiansuperleague.com/static-resources/images/players/small/0/'+item.player_id+'.png?v=1.93'}}>
            <Text style={styles.newsText}>{item.full_name}</Text>
            <View style={styles.buttonView}><Button title="Read more"
            onPress={() => this.onItemPressed(item)}
      buttonStyle={{backgroundColor: "#0091EA",
      width: width*0.3,
      height: 0.09,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 20}}
      containerStyle={{ marginTop: 100 }}/></View>
            </ImageBackground>
                </View>
                }
                keyExtractor={item => item.full_name}
                
                
              />
            </View>
          )
        
     }else{
      return (
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
             <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
          <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
                ></LinearGradient>
                      <Text style={styles.newsText}>Sorry An error Occured......Please make sure you have active internet connection and Please try again</Text>
                      <Button title="Reload"

             onPress={() => this.onReloadPressed()}
  buttonStyle={{backgroundColor: "#0091EA",
  width: width*0.3,
  height: 0.09,
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 20}}
  containerStyle={{ marginTop: 100 }}/>
        </View>
    )
     }
            
  }
    }
}

const styles = StyleSheet.create({
  
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    backgroundImage: {
      width: width,
      height: height,
      flex: 1,
    position: 'absolute',
top: 0,
  },
    newsText: {
      marginTop: height*0.25,
      fontFamily: 'Helvetica',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: "center",
      color:"white",
textAlignVertical: "center",
    },
    flatview: {
      justifyContent: 'center',
      paddingTop: 30,
      borderRadius: 25,
    },
    buttonView:{
      marginTop:height*0.1,
      marginLeft:width*0.5
    }
    
  });
const mapStateToProps = (state) => {
    return {
        players: state.players.players,
        fetch_status: state.players.fetch_status,
        error: state.players.error,
        players_cache:state.players.players_cache,//news form storage
        players_saved:state.players.players_saved, //status t/f
    };
};
export default connect(mapStateToProps,{fetchPlayers,fetchPlayersStart,savePlayers,navigateToScreen,getSavedPlayers})(PlayersScreen);