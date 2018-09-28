import {
    PLAYERS_FETCHED,
    PLAYERS_FETCH_ERROR,
    PLAYERS_FETCH_INIT,
    PLAYERS_SAVED,
    PLAYERS_NOT_SAVED,
    PLAYERS_FETCHED_FROM_STORAGE
} from './types';
import { AsyncStorage } from "react-native"

import { PLAYERS} from './api';
var axios = require('axios');

export const fetchPlayersStart = () => {
    return {
        type: PLAYERS_FETCH_INIT
    };
};

export const savePlayers = (players)=>{
    return async dispatch => {
        try {
            await AsyncStorage.setItem('players_cache', JSON.stringify(players));
            dispatch({ type: PLAYERS_SAVED,payload:true});
          } catch (error) {
            dispatch({ type: PLAYERS_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedPlayers=()=>{
    return async dispatch=>{
        await AsyncStorage.getItem('players_cache').then((stored_players) => {
             dispatch({type:PLAYERS_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_players)});     
         })
         

    }
}
export const fetchPlayers = () => {
    return (dispatch) => {
        axios.get(PLAYERS)
  .then(function (response) {
    
    dispatch({ type: PLAYERS_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    dispatch({ type: PLAYERS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
