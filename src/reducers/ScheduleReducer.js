import {
    SCHEDULE_FETCHED,
    SCHEDULE_FETCH_ERROR,
    SCHEDULE_FETCH_INIT,
    SCHEDULE_SAVED,
    SCHEDULE_NOT_SAVED,
    SCHEDULE_FETCHED_FROM_STORAGE
    // NEWS_SAVED,
    // NEWS_NOT_SAVED,
    // NEWS_FETCHED_FROM_STORAGE,
    // NEWS_NOT_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_NOT_FETCHED_FROM_STORAGE,
    // SAVED_STATUS_SAVED_TO_STORAGE,
    // SAVED_STATUS_NOT_SAVED_TO_STORAGE
    
 } from '../actions/types';
 const INITIAL_STATE = {
        schedule: {},
        schedule_cache:null,
        schedule_saved:false,
        fetch_status:'',
        error:''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SCHEDULE_FETCHED:
            console.log("-----SCHEDULE_fetched");
             return { ...state, schedule: action.payload,fetch_status:"success" };
        
        case SCHEDULE_FETCH_ERROR:
        console.log("----SCHEDULE_fetc_error");
         return { ...state, error: action.payload,fetch_status:"failed"};    
         
        case SCHEDULE_FETCH_INIT:
        console.log("-----SCHEDULE_fetc_start");
            return { ...state, schedule:{},fetch_status:"loading" };
        case SCHEDULE_NOT_SAVED:
            console.log("SCHEDULE not saved to async storage reducer-----");
            return{ ...state,schedule_saved:action.payload};
        case SCHEDULE_SAVED:
            console.log("SCHEDULE saved to async storage reducer-----");
            return{ ...state,schedule_saved:action.payload};
        case SCHEDULE_FETCHED_FROM_STORAGE:
            console.log("SCHEDULE FETCHED FROM ASYNC STORAGE");
            return{ ...state,schedule_cache:action.payload};
        default:
            return state;
    }
};
