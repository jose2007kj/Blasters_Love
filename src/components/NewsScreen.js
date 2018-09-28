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
 
import {fetchNews,navigateToScreen,fetchStart,saveNews,getSavedNews} from '../actions';

var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class NewsScreen extends Component{
    componentWillMount(){
      console.log("-----------inside news screen--------");
    }
    componentDidMount() {
        this.props.fetchStart();
        this.props.fetchNews();
        // console.log("json dtat "+JSON.stringify(this.props.news));
 }
 onItemPressed(item) {
  this.props.navigateToScreen('News Details', item);
}
onReloadPressed() {
  console.log("inside reload");
  this.props.fetchStart();
  this.props.fetchNews();
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
      this.props.saveNews(this.props.news);

      
    return(
            <View style={styles.container} >
                <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.7}
          resizeMode='cover'
          />
                <FlatList
                data={this.props.news}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View style={styles.flatview}>
                  
                  
                  <ImageBackground borderRadius={20}
              style={{flex:1,padding:1,height:height*0.4,opacity:0.8}}
              source={{uri: 'https://www.indiansuperleague.com/'+item.imgSrc}}>
            <Text style={styles.newsText}>{item.title}</Text>
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
                keyExtractor={item => item.id.toString()}
                
              />
            </View>
          )
      default:
      this.props.getSavedNews();
      // console.log("inside news saved sucess"+this.props.news_saved);
      if(this.props.news_cache!=null) {
        // console.log("inside news saved sucess");
        // console.log("news from async"+this.props.news_cache);
        
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
                data={this.props.news_cache}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>
                <View style={styles.flatview}>
                  
                  
                  <ImageBackground borderRadius={20}
              style={{flex:1,padding:1,height:height*0.4,opacity:0.8}}
              source={{uri: 'https://www.indiansuperleague.com/'+item.imgSrc}}>
            <Text style={styles.newsText}>{item.title}</Text>
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
                keyExtractor={item => item.id.toString()}
                
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
    },
    buttonView:{
      marginTop:height*0.1,
      marginLeft:width*0.5
    }
    
  });
const mapStateToProps = (state) => {
    return {
        news: state.news.news,
        fetch_status: state.news.fetch_status,
        error: state.news.error,
        news_cache:state.news.news_cache,//news form storage
        news_saved:state.news.news_saved, //status t/f
    };
};
export default connect(mapStateToProps,{fetchNews,fetchStart,saveNews,getSavedNews,navigateToScreen})(NewsScreen);