import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {fetchNewsDetails,fetchStartDetails} from '../actions';
import {Button,Card} from 'react-native-elements';
var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class NewsDetailScreen extends Component{
  
  componentWillMount(){
    // console.log("inside newsdetails"+JSON.stringify(this.props.newsDetailUrl));
    // this.props.fetchStartDetails();
    // this.props.fetchNewsDetails(this.props.newsDetailUrl);
  }
  componentDidMount() {
    this.props.fetchStartDetails();
    this.props.fetchNewsDetails(this.props.newsDetailUrl);
}
  

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
      console.log("testing image in card:"+this.props.newsDetailUrl.imgSrc);
  
      
        switch(this.props.fetch_status){
                case 'loading':
                      return (<View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                  <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.5}
          resizeMode='cover'
          />
                                  <ActivityIndicator size={'large'} /> 
                              </View>)
                
                case 'success':
                return(
                  <View>
                    <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.5}
          resizeMode='cover'
          />
                  <ScrollView contentContainerStyle={styles.contentContainer}>
                
                <Card title={this.props.newsDetailUrl.title}>
                <Image
                      borderRadius={20}
                      style={{flex:1,padding:1,height:height*0.4}}
                      source={{ uri: 'https://www.indiansuperleague.com/'+this.props.newsDetailUrl.imgSrc }}
                    />
                    <Text>{this.props.news}</Text>

                  </Card></ScrollView></View>)
                
                default:
                return (
                  <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                       <Image 
          source={require('../res/nav_header.jpg')}
          style={styles.backgroundImage}
          opacity={0.5}
          resizeMode='cover'
          />
                       <Text style={styles.newsText}>Sorry An error Occured......Please try again</Text>
                       <Button title="Reload"
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
      contentContainer: {
        paddingVertical: 20
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
        news: state.newsDetails.news_details,
        error: state.newsDetails.error,
        newsUrl:state.navigation.newsDetailUrl,
        fetch_status:state.newsDetails.fetch_status
    };
};
export default connect(mapStateToProps,{fetchNewsDetails,fetchStartDetails})(NewsDetailScreen);
