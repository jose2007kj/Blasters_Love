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
import {fetchScheduleDetails,navigateToScreen,fetchStartScheduleDetails} from '../actions';

var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class ScheduleDetailScreen extends Component{
  item={};
    componentWillMount(){
        console.log("id is"+this.props.scheduleId);
        this.props.fetchStartScheduleDetails();
        this.props.fetchScheduleDetails(this.props.scheduleId);
    }
    
    onItemPressed() {
      this.props.fetchStartScheduleDetails();
        this.props.fetchScheduleDetails(this.props.scheduleId);
   }
    renderHeader() {
        // const headers = ['Team', 'Played', 'Wins', 'Draws', 'Lost', 'Points']
        return (
          <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.065,marginBottom: 10 }}>
                <Image 
                 style={styles.teamLogo}
                 source={{uri:'https://www.indiansuperleague.com/static-resources/images/clubs/small/'+this.props.schedule_details.data.teams[0].id+'.png?v=1.93'}}
                />
                <Text style={{color:'white',flex:1, fontSize:18,marginLeft:width*0.15}}>TEAM STATS</Text>
                <Image 
                 style={styles.teamLogo}
                 source={{uri:'https://www.indiansuperleague.com/static-resources/images/clubs/small/'+this.props.schedule_details.data.teams[1].id+'.png?v=1.93'}}
                />
                
          </View>
          
        )
      }
    
    renderItem (){
                return(
                <View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAshots}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> SHOTS</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBshots}</Text>
                </View>
                
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAshots_on_target}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> SHOTS ON TARGET</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBshots_on_target}</Text>
                </View>
                
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamApossesionpercent}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> POSSESION PERCENTAGE</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBpossesionpercent}</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAshots_on_target_percentage}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> SHOTS ON TARGET PERCENTAGE</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBshots_on_target_percentage}</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAcorner_kicks}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> CORNER KICKS</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBcorner_kicks}</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAfouls_committed}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> FOULS COMMITTED</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBfouls_committed}</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAoffsides}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> OFF SIDES</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBoffsides}</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAred_cards}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> RED CARDS</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamBred_cards}</Text>
                </View>
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.069, borderRadius:35}}>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamAyellow_cards}</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:2, fontSize:14}}> YELLOW CARDS</Text>
                <Text style={{marginLeft:width*0.09,color:'white',flex:1, fontSize:18}}>{this.item.teamByellow_cards}</Text>
                </View>
                </View>

      );}


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
      teamStats={};

        this.item={
          id:1,
          teamAshots:this.props.schedule_details.data.teams[0].stats.events.shots,
          teamBshots:this.props.schedule_details.data.teams[1].stats.events.shots,
          teamAshots_on_target:this.props.schedule_details.data.teams[0].stats.events.shots_on_target,
          teamBshots_on_target:this.props.schedule_details.data.teams[1].stats.events.shots_on_target,
          teamApossesionpercent:this.props.schedule_details.data.teams[0].stats.possession_percentage,
          teamBpossesionpercent:this.props.schedule_details.data.teams[1].stats.possession_percentage,
          teamAshots_on_target_percentage:this.props.schedule_details.data.teams[0].stats.events.shots_on_target_percentage,
          teamBshots_on_target_percentage:this.props.schedule_details.data.teams[1].stats.events.shots_on_target_percentage,
          teamAfouls_committed:this.props.schedule_details.data.teams[0].stats.events.fouls_committed,
          teamBfouls_committed:this.props.schedule_details.data.teams[1].stats.events.fouls_committed,
          teamAred_cards:this.props.schedule_details.data.teams[0].stats.events.red_cards,
          teamBred_cards:this.props.schedule_details.data.teams[1].stats.events.red_cards,
          teamAyellow_cards:this.props.schedule_details.data.teams[0].stats.events.yellow_cards,
          teamByellow_cards:this.props.schedule_details.data.teams[1].stats.events.yellow_cards,
          teamAoffsides:this.props.schedule_details.data.teams[0].stats.events.offsides,
          teamBoffsides:this.props.schedule_details.data.teams[1].stats.events.offsides,
          teamAcorner_kicks:this.props.schedule_details.data.teams[0].stats.events.corner_kicks,
          teamBcorner_kicks:this.props.schedule_details.data.teams[1].stats.events.corner_kicks
        }

      
      console.log("the fetched data is :"+JSON.stringify(teamStats));
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
          {this.renderHeader()}
          {this.renderItem()}
                
            </View>
          )
      default:
      
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
             <Text style={styles.newsText}>Sorry An error Occured......Please make sure you have active internet connection and try again</Text>
             <Button title="Reload"
             onPress={() => this.onItemPressed()}
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
    
    teamLogo:{
      width:width*0.2,
      height:height*0.1
  },
    
    
  });
const mapStateToProps = (state) => {
    return {
        schedule_details: state.scheduleDetails.schedule_details,
        fetch_status: state.scheduleDetails.fetch_status,
        scheduleIdc:state.navigation.scheduleId,
        error: state.scheduleDetails.error
    };
};
export default connect(mapStateToProps,{fetchScheduleDetails,navigateToScreen,fetchStartScheduleDetails})(ScheduleDetailScreen);