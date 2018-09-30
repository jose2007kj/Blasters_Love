import {
    SCHEDULE_DETAILS_FETCHED,
    SCHEDULE_DETAILS_FETCH_ERROR,
    SCHEDULE_DETAILS_FETCH_INIT

} from './types';
import { SCHEDULE_DETAILS} from './api';
var axios = require('axios');
export const fetchStartScheduleDetails = () => {
    return {
        type: SCHEDULE_DETAILS_FETCH_INIT
    };
};
export const fetchScheduleDetails = (schedule_id) => {
    console.log("schedle id inside action fetch"+schedule_id)
    return (dispatch) => {
        axios.get(SCHEDULE_DETAILS+schedule_id+'.json')
  .then(function (response) {
   dispatch({ type: SCHEDULE_DETAILS_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    dispatch({ type: SCHEDULE_DETAILS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
            
