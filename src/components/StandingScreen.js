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
import {fetchStanding,navigateToScreen,saveStanding,fetchStandingStart,getSavedStanding} from '../actions';

var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class StandingScreen extends Component{
    componentWillMount(){
        this.props.fetchStandingStart();
        this.props.fetchStanding();
    }
    
    onItemPressed() {
      this.props.fetchStandingStart();
        this.props.fetchStanding();
   }
    renderHeader() {
        const headers = ['Team', 'Played', 'Wins', 'Draws', 'Lost', 'Points']
        return (
          <View style={styles.header}>
          {
            headers.map((header, index) => {
              // only apply margin to first header
              const marginLeft = index === 0 ? 5 : 0
              const flex = index === 0 ? 1 : 1
              return (
                <View style={[styles.headerLabelView, { marginLeft: marginLeft, flex: flex }]} key={ index }>
                  <Text style={styles.headerLabelText}> { header } </Text>
                </View>
              )
            })
          }
          </View>
        )
      }
    
    renderItem = ({item}) => (
        
        
                <View style={{flexDirection:'row',  alignItems:'center', justifyContent:'center', width:width*0.99, height:height*0.065, borderRadius:35, borderColor:'#0091EA', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
                <Text style={{marginLeft:2,color:'white',flex:2, fontSize:9}}>{item.team_name}</Text>
                <Text style={{marginLeft:-2,color:'white',flex:1, fontSize:18}}> {item.played}</Text>
                <Text style={{color:'white',flex:1, fontSize:18}}>{item.wins}</Text>
                <Text style={{color:'white',flex:1, fontSize:18}}> {item.draws}</Text>
                <Text style={{color:'white',flex:1, fontSize:18}}>{item.lost}</Text>
                <Text style={{color:'white',flex:1, fontSize:18}}>{item.points}</Text>
                
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
          />
          <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={style.gradient}
                ></LinearGradient>
          <ActivityIndicator size={'large'} />
      </View>
      case 'success':
      this.props.saveStanding(this.props.standing);  
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
                <FlatList
                data={this.props.standing.data.standings.groups[0].teams.team}
                showsVerticalScrollIndicator={false}    
                renderItem={this.renderItem}
                keyExtractor={item => item.team_id.toString()}    
              />
            </View>
          )
      default:
      this.props.getSavedStanding();
      if(this.props.standing_cache!=null) {
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
          {
            this.renderHeader()
            }
            <FlatList
                data={this.props.standing_cache.data.standings.groups[0].teams.team}
                showsVerticalScrollIndicator={false}    
                renderItem={this.renderItem}
                keyExtractor={item => item.team_id.toString()}    
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
    header: {
        flexDirection: 'row',
        marginBottom: 10
      },
      headerLabelView: {
        flex: 1
      },
      headerLabelText: {
        textAlign: 'center',
        color: '#D3D3D3',
        fontFamily: 'Rubik-Light'
    },
      statcell: {
        flex: 1
      }
    
  });
const mapStateToProps = (state) => {
    return {
        standing: state.standing.standing,
        fetch_status: state.standing.fetch_status,
        error: state.standing.error,
        standing_cache:state.standing.standing_cache,//news form storage
        standing_saved:state.standing.standing_saved, //status t/f
    };
};
export default connect(mapStateToProps,{fetchStanding,fetchStandingStart,saveStanding,navigateToScreen,getSavedStanding})(StandingScreen);