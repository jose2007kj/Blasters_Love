import {
    STANDING_FETCHED,
    STANDING_FETCH_ERROR,
    STANDING_FETCH_INIT,
    STANDING_SAVED,
    STANDING_NOT_SAVED,
    STANDING_FETCHED_FROM_STORAGE

} from './types';
import { AsyncStorage } from "react-native"

import { STANDING} from './api';
// import axios from axios;
var axios = require('axios');

export const fetchStandingStart = () => {
    return {
        type: STANDING_FETCH_INIT
    };
};

export const saveStanding = (standing)=>{
    console.log("----------inside STANDING save action ------");
    return async dispatch => {
        try {
            await AsyncStorage.setItem('standing_cache', JSON.stringify(standing));
            dispatch({ type: STANDING_SAVED,payload:true});
          } catch (error) {
            console.log("STANDING data  not saved error is:"+error)
            dispatch({ type: STANDING_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedStanding=()=>{
    console.log("--------inside get saved STANDING action---------");
    return async dispatch=>{
        await AsyncStorage.getItem('standing_cache').then((stored_standing) => {
            console.log("STANDING from async"+stored_standing);
            console.log("json dtat "+JSON.parse(stored_standing));
             dispatch({type:STANDING_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_standing)});     
         })
         

    }
}
export const fetchStanding = () => {
    console.log("inside STANDING FETCH ACTIONS");
    return (dispatch) => {
        axios.get(STANDING)
  .then(function (response) {
    console.log("stanging fetched is :"+JSON.stringify(response));
    dispatch({ type: STANDING_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    // handle error
    console.log('error fetching STANDING',JSON.stringify(error));
    dispatch({ type: STANDING_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
