import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {fetchStartPlayerDetails,fetchPlayerDetails} from '../actions';
import {Button,Card} from 'react-native-elements';
var width = Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class PlayerDetailScreen extends Component{
  
  componentWillMount(){
    // console.log("inside newsdetails"+JSON.stringify(this.props.newsDetailUrl));
    // this.props.fetchStartDetails();
    // this.props.fetchNewsDetails(this.props.newsDetailUrl);
  }
  componentDidMount() {
      console.log("player url ,playerdetail url value is"+this.props.playerDetailUrl)
    this.props.fetchStartPlayerDetails();
    this.props.fetchPlayerDetails(this.props.playerDetailUrl);
}
  

  render() {
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
        console.log("testing url:"+JSON.stringify(this.props.player_details))
        filteredPlayerDetails={}
        Object.keys(this.props.player_details.data.stats.season).map( (key,index)=>{
            if(this.props.player_details.data.stats.season[key].year==0){
                filteredPlayerDetails={
                id:key,
                games:this.props.player_details.data.stats.season[key].matches,
                goals:this.props.player_details.data.stats.season[key].goals,
                assists:this.props.player_details.data.stats.season[key].assists,
                shots:this.props.player_details.data.stats.season[key].shots,
                position:this.props.player_details.data.bio.position_name,
                saves:this.props.player_details.data.stats.season[key].saves,
                clearance:this.props.player_details.data.stats.season[key].clearance,
                goals_conceded:this.props.player_details.data.stats.season[key].goals_conceded
                }}
            
            });
            if(filteredPlayerDetails.position=='Goalkeeper'){
                return(  
    
                    <ImageBackground source={require('../res/nav_header.jpg')} resizeMode='cover' style={styles.container}>
                                <ImageBackground source ={{uri:'https://www.indiansuperleague.com/static-resources/images/players/small/0/'+this.props.playerDetailUrl.player_id+'.png?v=1.93'}} resizeMode='cover' style={styles.container}>
                          <ImageBackground source={require('../res/overlay2.png')} resizeMode='stretch' style={styles.container}>
                    
                          <View style={{flex:1, justifyContent:'center', marginLeft:60}}>
                            <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-20}}>
                          <View style={{flex:1, justifyContent:'center'}}>
                          <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>GAMES</Text>
                          {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
                          <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>heading enthu kodukum</Text>
                          <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> subheading???</Text>
                          </View> */}
                          </View>
                          <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494577', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.2)'}}>
                          <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.games}</Text>
                          </View>
                            </View>
                            
                            <View style={{flexDirection:'row',width:300, margin:5}}>
                          <View style={{flex:1, justifyContent:'center'}}>
                          <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>SAVES</Text>
                          {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
                          <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>2nd heading</Text>
                          <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> 2nd subheading</Text>
                          </View> */}
                          </View>
                          <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#d9991d', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
                          <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.saves}</Text>
                          </View>
                            </View>
                            <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-30}}>
                          <View style={{flex:1, justifyContent:'center'}}>
                          <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>GOALS CONCEDED</Text>
                          {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
                          <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>3rd heagin</Text>
                          <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> 3rd sub heading</Text>
                          </View> */}
                          </View>
                          <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494675', margin:5, borderWidth:3, backgroundColor:'rgba(73,70,117,0.6)'}}>
                          <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.goals_conceded}</Text>
                          </View>
                            </View>
                            <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-20}}>
                          <View style={{flex:1, justifyContent:'center'}}>
                          <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>CLEARANCES</Text>
                          {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
                          <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>4th heading</Text>
                          <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> 4th subheading</Text>
                          </View> */}
                          </View>
                          <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494675', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.3)'}}>
                          <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.clearance}</Text>
                          </View>
                            </View>
                            {/* <View style={styles.controls}>
                            <TouchableOpacity style={styles.circle}>
                            <Icon name = "navigate-before" onPress = {() => this.prev()} size={20} color="#d9991d" />
                            </TouchableOpacity>
                            <Text style={{fontSize:12, fontWeight:'600', color:'#fff'}}>PLAYER CARD</Text>
                            <TouchableOpacity style={styles.circle}>
                            <Icon name = "navigate-next" onPress ={() => this.next()} size={20} color="#d9991d"  />
                            </TouchableOpacity>
                            </View> */}
                          </View>
                          </ImageBackground>
                          </ImageBackground>
                    </ImageBackground>
                    //
                    )
            }else{

            
return(  
    
<ImageBackground source={require('../res/nav_header.jpg')} resizeMode='cover' style={styles.container}>
            <ImageBackground source ={{uri:'https://www.indiansuperleague.com/static-resources/images/players/small/0/'+this.props.playerDetailUrl.player_id+'.png?v=1.93'}} resizeMode='cover' style={styles.container}>
      <ImageBackground source={require('../res/overlay2.png')} resizeMode='stretch' style={styles.container}>

      <View style={{flex:1, justifyContent:'center', marginLeft:60}}>
        <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-20}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>GAMES</Text>
      {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>heading enthu kodukum</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> subheading???</Text>
      </View> */}
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494577', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.2)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.games}</Text>
      </View>
        </View>
        
        <View style={{flexDirection:'row',width:300, margin:5}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>GOALS</Text>
      {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>2nd heading</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> 2nd subheading</Text>
      </View> */}
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#d9991d', margin:5, borderWidth:3, backgroundColor:'rgba(217,153,29,0.4)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.goals}</Text>
      </View>
        </View>
        <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-30}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>ASSIST</Text>
      {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>3rd heagin</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> 3rd sub heading</Text>
      </View> */}
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494675', margin:5, borderWidth:3, backgroundColor:'rgba(73,70,117,0.6)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.assists}</Text>
      </View>
        </View>
        <View style={{flexDirection:'row',width:300, margin:5, marginLeft:-20}}>
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{textAlign:'right',fontWeight:'800', fontSize:18, color:'#fff', alignSelf:'flex-end'}}>SHOTS</Text>
      {/* <View style={{flexDirection:'row', alignSelf:'flex-end', margin:5,}}>
      <Text style={{color:'#ffb240',textAlign:'right', fontWeight:'700', fontSize:12}}>4th heading</Text>
      <Text style={{textAlign:'right', color:"#999", fontSize:12,fontWeight:'600',}}> 4th subheading</Text>
      </View> */}
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', width:70, height:70, borderRadius:35, borderColor:'#494675', margin:5, borderWidth:3, backgroundColor:'rgba(0,0,0,0.3)'}}>
      <Text style={{color:'#fff', fontSize:28, fontWeight:'700'}}>{filteredPlayerDetails.shots}</Text>
      </View>
        </View>
        {/* <View style={styles.controls}>
        <TouchableOpacity style={styles.circle}>
        <Icon name = "navigate-before" onPress = {() => this.prev()} size={20} color="#d9991d" />
        </TouchableOpacity>
        <Text style={{fontSize:12, fontWeight:'600', color:'#fff'}}>PLAYER CARD</Text>
        <TouchableOpacity style={styles.circle}>
        <Icon name = "navigate-next" onPress ={() => this.next()} size={20} color="#d9991d"  />
        </TouchableOpacity>
        </View> */}
      </View>
      </ImageBackground>
      </ImageBackground>
</ImageBackground>
//
)}
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
        
}}

const styles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
        flex: 1,
      position: 'absolute',
  top: 0,
    },
    container: {
      flex: 1,
      width:null,
      height:null
  },controls:{
    position:'absolute',
    height:50,
    top:(height/2)-50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    left:-60,
    width:width,
    backgroundColor:'rgba(0,0,0,0.2)'
  },
  circle:{
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    margin:5,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#d9991d',
    backgroundColor:'rgba(217,153,29,0.2)'
  },
  news:{
    flex:3
  },
  menu:{
    height:height-60,
    width:width,
    justifyContent:'center'
  }
  }
  );
  const mapStateToProps = (state) => {
    return {
        player_details: state.playerDetails.player_details,
        error: state.playerDetails.error,
        playerUrl:state.navigation.playerDetailUrl,
        fetch_status:state.playerDetails.fetch_status
    };
};
export default connect(mapStateToProps,{fetchStartPlayerDetails,fetchPlayerDetails})(PlayerDetailScreen);