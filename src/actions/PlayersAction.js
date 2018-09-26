import {
    PLAYERS_FETCHED,
    PLAYERS_FETCH_ERROR,
    PLAYERS_FETCH_INIT,
    PLAYERS_SAVED,
    PLAYERS_NOT_SAVED,
    PLAYERS_FETCHED_FROM_STORAGE
    // SAVED_STATUS_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_NOT_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_SAVED_TO_STORAGE,
    // SAVED_STATUS_NOT_SAVED_TO_STORAGE,
    // NEWS_FETCHED_FROM_STORAGE,
    // NEWS_NOT_FETCHED_FROM_STORAGE

} from './types';
import { AsyncStorage } from "react-native"

import { PLAYERS} from './api';
// import axios from axios;
var axios = require('axios');

export const fetchPlayersStart = () => {
    return {
        type: PLAYERS_FETCH_INIT
    };
};

export const savePlayers = (players)=>{
    console.log("----------inside players save action ------");
    return async dispatch => {
        try {
            await AsyncStorage.setItem('players_cache', JSON.stringify(players));
            dispatch({ type: PLAYERS_SAVED,payload:true});
          } catch (error) {
            console.log("players data  not saved error is:"+error)
            dispatch({ type: PLAYERS_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedPlayers=()=>{
    console.log("--------inside get saved players action---------");
    return async dispatch=>{
        await AsyncStorage.getItem('players_cache').then((stored_players) => {
            console.log("players from async"+stored_players);
            console.log("json dtat "+JSON.parse(stored_players));
             dispatch({type:PLAYERS_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_players)});     
         })
         

    }
}
export const fetchPlayers = () => {
    console.log("inside plYERS FETCH ACTIONS");
    return (dispatch) => {
        axios.get(PLAYERS)
  .then(function (response) {
    
    dispatch({ type: PLAYERS_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    // handle error
    console.log('error fetching news',JSON.stringify(error));
    dispatch({ type: PLAYERS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
