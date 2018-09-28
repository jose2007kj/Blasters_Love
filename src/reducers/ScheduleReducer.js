import {
    SCHEDULE_FETCHED,
    SCHEDULE_FETCH_ERROR,
    SCHEDULE_FETCH_INIT,
    SCHEDULE_SAVED,
    SCHEDULE_NOT_SAVED,
    SCHEDULE_FETCHED_FROM_STORAGE
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
            
             return { ...state, schedule: action.payload,fetch_status:"success" };
        
        case SCHEDULE_FETCH_ERROR:
        
         return { ...state, error: action.payload,fetch_status:"failed"};    
         
        case SCHEDULE_FETCH_INIT:
        
            return { ...state, schedule:{},fetch_status:"loading" };
        case SCHEDULE_NOT_SAVED:
           
            return{ ...state,schedule_saved:action.payload};
        case SCHEDULE_SAVED:
            
            return{ ...state,schedule_saved:action.payload};
        case SCHEDULE_FETCHED_FROM_STORAGE:
            
            return{ ...state,schedule_cache:action.payload};
        default:
            return state;
    }
};
