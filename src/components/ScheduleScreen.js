/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions,StyleSheet,FlatList,Image, Text, View,ActivityIndicator,ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Button} from 'react-native-elements'; 
import {fetchSchedule,navigateToScreen,fetchScheduleStart,saveSchedule,getSavedSchedule} from '../actions';
var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
// dateTime={};
class ScheduleScreen extends Component{
    
    componentDidMount() {
        this.props.fetchScheduleStart();
        this.props.fetchSchedule();
       }
    
    onReloadPressed(){
      this.props.fetchScheduleStart();
        this.props.fetchSchedule();
    }
renderItem = ({item}) => (
    <View style={{ alignItems:'center', justifyContent:'center', width:width, height:height*0.3, borderRadius:35, borderColor:'#d9991d', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
    
            <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.7, height:height*0.05, borderRadius:35, borderColor:'#d9991d', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
            <Text style={{color:'white',textAlign:'center', fontWeight:'700', fontSize:20}}>{item.event_name}</Text>
            <Text style={{color:'white',textAlign:'center', fontWeight:'700', fontSize:18}}> {item.event_status}</Text>
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', margin:5,}}>
            <Image 
          source={{uri:'https://www.indiansuperleague.com/static-resources/images/clubs/small/'+item.participants[0].id+'.png?v=1.93'}}
          style={styles.teamLogo}
          opacity={0.7}
          />
          <Text style={styles.newsText}>{item.participants[0].value}</Text>
          <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494577', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.2)'}}>
                          <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>Vs</Text>
                          </View>
                          <Text style={styles.newsText}>{item.participants[1].value}</Text>
          <Image 
          source={{uri:'https://www.indiansuperleague.com/static-resources/images/clubs/small/'+item.participants[1].id+'.png?v=1.93'}}
          style={styles.teamLogo}
          opacity={0.7}
          />
          
                          </View>
            
            
            <View style={{ alignItems:'center', justifyContent:'center', width:width*0.7, height:height*0.05, borderRadius:35, borderColor:'#d9991d', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
            <Text style={{color:'white',textAlign:'center', fontWeight:'700', fontSize:20}}>{item.start_date}</Text>
            </View>
                </View>
  );
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
      this.props.saveSchedule(this.props.schedule);
      
    return(
            <View style={styles.container} >
                <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
                <FlatList
                data={this.props.schedule.data.matches}
                showsVerticalScrollIndicator={false}
                renderItem={this.renderItem}
                keyExtractor={item => item.game_id.toString()}
                
              />
            </View>
          )
      default:
      this.props.getSavedSchedule();
      if(this.props.schedule_cache!=null) {
        return(
            <View style={styles.container} >
              <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
               <FlatList
                data={this.props.schedule_cache.data.matches}
                showsVerticalScrollIndicator={false}
                renderItem={this.renderItem}
                // <View style={styles.flatview}>
                keyExtractor={item => item.game_id.toString()}
                
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
             <Text style={styles.newsText}>Sorry An error Occured......Please make sure you have an active internet connection and try again</Text>
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
    teamLogo:{
        width:width*0.2,
        height:height*0.1
    },
    backgroundImage: {
      width: width,
      height: height,
      flex: 1,
    position: 'absolute',
top: 0,
  },
    newsText: {
      marginTop: 10,
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
    }
    
  });
const mapStateToProps = (state) => {
    return {
        schedule: state.schedule.schedule,
        fetch_status: state.schedule.fetch_status,
        error: state.news.error,
        schedule_cache:state.schedule.schedule_cache,//news form storage
        schedule_saved:state.schedule.schedule_saved, //status t/f
    };
};
export default connect(mapStateToProps,{fetchSchedule,fetchScheduleStart,saveSchedule,getSavedSchedule,navigateToScreen})(ScheduleScreen);