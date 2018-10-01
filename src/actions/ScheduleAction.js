import {
    SCHEDULE_FETCHED,
    SCHEDULE_FETCH_ERROR,
    SCHEDULE_FETCH_INIT,
    SCHEDULE_SAVED,
    SCHEDULE_NOT_SAVED,
    SCHEDULE_FETCHED_FROM_STORAGE
} from './types';
import { AsyncStorage } from "react-native"

import { SCHEDULE} from './api';
var axios = require('axios');

export const fetchScheduleStart = () => {
    return {
        type: SCHEDULE_FETCH_INIT
    };
};

export const saveSchedule = (schedule)=>{
    return async dispatch => {
        try {
            await AsyncStorage.setItem('schedule_cache', JSON.stringify(schedule));
            dispatch({ type: SCHEDULE_SAVED,payload:true});
          } catch (error) {
            dispatch({ type: SCHEDULE_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedSchedule=()=>{
    return async dispatch=>{
        await AsyncStorage.getItem('schedule_cache').then((stored_schedule) => {
             dispatch({type:SCHEDULE_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_schedule)});     
         })
         

    }
}
export const fetchSchedule = () => {
    return (dispatch) => {
        axios.get(SCHEDULE)
  .then(function (response) {
    Object.keys(response.data.matches).map( (key,index)=>{
        var splitDt=response.data.matches[key].start_date.split('T');
        var splitT=splitDt[1].split('+');
        var fTime=splitT[0].split(':');
        correctTime=parseInt(fTime[0])-12;
        response.data.matches[key].start_date=splitDt[0]+' @ '+correctTime.toString()+':'+fTime[1];
    
    });
    dispatch({ type: SCHEDULE_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    dispatch({ type: SCHEDULE_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
