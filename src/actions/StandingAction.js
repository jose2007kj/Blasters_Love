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
var axios = require('axios');

export const fetchStandingStart = () => {
    return {
        type: STANDING_FETCH_INIT
    };
};

export const saveStanding = (standing)=>{
    return async dispatch => {
        try {
            await AsyncStorage.setItem('standing_cache', JSON.stringify(standing));
            dispatch({ type: STANDING_SAVED,payload:true});
          } catch (error) {
            dispatch({ type: STANDING_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedStanding=()=>{
    return async dispatch=>{
        await AsyncStorage.getItem('standing_cache').then((stored_standing) => {
             dispatch({type:STANDING_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_standing)});     
         })
         

    }
}
export const fetchStanding = () => {
    return (dispatch) => {
        axios.get(STANDING)
  .then(function (response) {
    dispatch({ type: STANDING_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    dispatch({ type: STANDING_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
