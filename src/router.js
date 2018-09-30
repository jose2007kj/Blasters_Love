import React, { Component } from 'react';
import {BackHandler} from 'react-native';
import { Router, Scene, Stack, Drawer,Actions } from 'react-native-router-flux';
import SplashScreen from './components/SplashScreen';
import NewsScreen from './components/NewsScreen';
import PlayersScreen from './components/PlayersScreen';
import PlayerDetailScreen from './components/PlayerDetailScreen';
import NewsDetailsScreen from './components/NewsDetailScreen';
import DrawerMenu from './components/DrawerMenu';
import MenuIcon from './res/icons/icon_menu.png';
import BackIcon from './res/icons/icon_back.png';
import ScheduleScreen from './components/ScheduleScreen';
import StandingScreen from './components/StandingScreen';
class RouterComponent extends Component {
    onBackPressed = () => {
        if (Actions.state.index ===0) {
          BackHandler.exitApp();
          return false;
        }
        
    };
    render() {
        return (
            <Router
            backAndroidHandler={this.onBackPressed}
            titleStyle={{color:'#F0FFFF'}}
            navigationBarStyle={{ backgroundColor: '#5D4037' }}
            >
                <Stack key="root">
                    <Stack key="launcher" hideNavBar>
                        <Scene
                            key="splash"
                            component={SplashScreen}
                            title="Splash"
                        />
                    </Stack> 
                    <Stack key="main" hideNavBar>
                        <Drawer
                            key="drawer"
                            contentComponent={DrawerMenu}
                            drawerImage={MenuIcon}
                        >
                            <Scene
                                key="news"
                                component={NewsScreen}
                                title="Home"                                
                                initial
                                hideNavBar={false}                                
                            />
                            <Scene
                                key="players"
                                component={PlayersScreen}
                                title="Players"                                
                                hideNavBar={false}                                
                            />
                            <Scene
                                key="schedule"
                                component={ScheduleScreen}
                                title="schedule"                                
                                hideNavBar={false}                                
                            />
                            <Scene
                                key="standing"
                                component={StandingScreen}
                                title="Standings"                                
                                hideNavBar={false}                                
                            />
                               
                        </Drawer>
                        <Scene
                                key="newsDetails"
                                component={NewsDetailsScreen}
                                title="News Details"
                                hideNavBar={false}
                                backButtonImage={BackIcon}
                            />
                        <Scene
                                key="playerDetails"
                                component={PlayerDetailScreen}
                                title="Player Details"
                                hideNavBar={false}
                                backButtonImage={BackIcon}
                            />
                      
                    </Stack>
                </Stack>
            </Router>
        );
    }  
}


export default RouterComponent;
