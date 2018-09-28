import {
    STANDING_FETCHED,
    STANDING_FETCH_ERROR,
    STANDING_FETCH_INIT,
    STANDING_SAVED,
    STANDING_NOT_SAVED,
    STANDING_FETCHED_FROM_STORAGE
    
    
 } from '../actions/types';
 const INITIAL_STATE = {
        standing: {},
        standing_cache:null,
        standing_saved:false,
        fetch_status:'',
        error:''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STANDING_FETCHED:
             return { ...state, standing: action.payload,fetch_status:"success" };
        
        case STANDING_FETCH_ERROR:
         return { ...state, error: action.payload,fetch_status:"failed"};    
         
        case STANDING_FETCH_INIT:
            return { ...state, standing:{},fetch_status:"loading" };
        case STANDING_NOT_SAVED:
            return{ ...state,standing_saved:action.payload};
        case STANDING_SAVED:
            return{ ...state,standing_saved:action.payload};
        case STANDING_FETCHED_FROM_STORAGE:
            return{ ...state,standing_cache:action.payload};
        default:
            return state;
    }
};
