import {
    SCHEDULE_FETCHED,
    SCHEDULE_FETCH_ERROR,
    SCHEDULE_FETCH_INIT,
    SCHEDULE_SAVED,
    SCHEDULE_NOT_SAVED,
    SCHEDULE_FETCHED_FROM_STORAGE
    // SAVED_STATUS_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_NOT_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_SAVED_TO_STORAGE,
    // SAVED_STATUS_NOT_SAVED_TO_STORAGE,
    // NEWS_FETCHED_FROM_STORAGE,
    // NEWS_NOT_FETCHED_FROM_STORAGE

} from './types';
import { AsyncStorage } from "react-native"

import { SCHEDULE} from './api';
// import axios from axios;
var axios = require('axios');

export const fetchScheduleStart = () => {
    return {
        type: SCHEDULE_FETCH_INIT
    };
};

export const saveSchedule = (schedule)=>{
    console.log("----------inside schedule save action ------");
    return async dispatch => {
        try {
            await AsyncStorage.setItem('schedule_cache', JSON.stringify(schedule));
            dispatch({ type: SCHEDULE_SAVED,payload:true});
          } catch (error) {
            console.log("schedule data  not saved error is:"+error)
            dispatch({ type: SCHEDULE_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedSchedule=()=>{
    console.log("--------inside get saved schedule action---------");
    return async dispatch=>{
        await AsyncStorage.getItem('schedule_cache').then((stored_schedule) => {
            console.log("schedule from async"+stored_schedule);
            console.log("json dtat "+JSON.parse(stored_schedule));
             dispatch({type:SCHEDULE_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_schedule)});     
         })
         

    }
}
export const fetchSchedule = () => {
    console.log("inside plYERS FETCH ACTIONS");
    return (dispatch) => {
        axios.get(SCHEDULE)
  .then(function (response) {
    
    dispatch({ type: SCHEDULE_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    // handle error
    console.log('error fetching news',JSON.stringify(error));
    dispatch({ type: SCHEDULE_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
