import {
    PLAYERS_FETCHED,
    PLAYERS_FETCH_ERROR,
    PLAYERS_FETCH_INIT,
    PLAYERS_SAVED,
    PLAYERS_NOT_SAVED,
    PLAYERS_FETCHED_FROM_STORAGE
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
        players: {},
        players_cache:null,
        players_saved:false,
        fetch_status:'',
        error:''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYERS_FETCHED:
             return { ...state, players: action.payload,fetch_status:"success" };
        
        case PLAYERS_FETCH_ERROR:
         return { ...state, error: action.payload,fetch_status:"failed"};    
         
        case PLAYERS_FETCH_INIT:
            return { ...state, players:{},fetch_status:"loading" };
        case PLAYERS_NOT_SAVED:
            return{ ...state,players_saved:action.payload};
        case PLAYERS_SAVED:
            return{ ...state,players_saved:action.payload};
        case PLAYERS_FETCHED_FROM_STORAGE:
            return{ ...state,players_cache:action.payload};
        default:
            return state;
    }
};
