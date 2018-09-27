/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,TouchableOpacity,Dimensions,StyleSheet,FlatList,Image, Text, View,ActivityIndicator,ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Button} from 'react-native-elements';
 
import {fetchPlayers,navigateToScreen,savePlayers,fetchPlayersStart,getSavedPlayers} from '../actions';

var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class PlayersScreen extends Component{
    componentWillMount(){
      console.log("-----------loading players screen--------");
      this.props.fetchPlayersStart();
    }
    componentDidMount() {
        
        this.props.fetchPlayers();
        // console.log("json dtat "+JSON.stringify(this.props.news));
 }
 onItemPressed(item) {
     console.log("item pressed");
  this.props.navigateToScreen('Player Details', item);
}
onReloadPressed(){
  console.log("inside reload");
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
          /><ActivityIndicator size={'large'} />
      </View>
      case 'success':
      this.props.savePlayers(this.props.players);  
    console.log("players data inside players screen "+JSON.stringify(this.props.players));
          return(
            <View style={styles.container} >
                <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
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
      buttonStyle={{backgroundColor: "#5D4037",
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
      console.log("enthu kopa...."+JSON.stringify(this.props.players_cache));
      if(this.props.players_cache!=null) {
        
        // console.log("inside news saved sucess");
        console.log("players from async"+JSON.stringify(this.props.players_cache));
        
        // console.log("json dtat "+JSON.stringify(this.props.news_cache));
          return(
            <View style={styles.container} >
              <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
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
      buttonStyle={{backgroundColor: "#5D4037",
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
                      <Text style={styles.newsText}>Sorry An error Occured......Please make sure you have active internet connection and Please try again</Text>
                      <Button title="Reload"

             onPress={() => this.onReloadPressed()}
  buttonStyle={{backgroundColor: "#5D4037",
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
      marginTop: height*0.1,
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
      borderRadius: 2,
    },
    name: {
      fontFamily: 'Verdana',
      fontSize: 18
    },
    email: {
      color: 'red'
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