import {
    NEWS_FETCHED,
    NEWS_FETCH_ERROR,
    NEWS_FETCH_INIT,
    NEWS_SAVED,
    NEWS_NOT_SAVED,
    NEWS_FETCHED_FROM_STORAGE,
    NEWS_NOT_FETCHED_FROM_STORAGE,
    SAVED_STATUS_FETCHED_FROM_STORAGE,
    SAVED_STATUS_NOT_FETCHED_FROM_STORAGE,
    SAVED_STATUS_SAVED_TO_STORAGE,
    SAVED_STATUS_NOT_SAVED_TO_STORAGE
    
 } from '../actions/types';
 const INITIAL_STATE = {
        news: {},
        news_cache:null,
        news_saved:false,
        fetch_status:'',
        error:''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_FETCHED:
            console.log("news_fetched");
             return { ...state, news: action.payload,fetch_status:"success" };
        
        case NEWS_FETCH_ERROR:
        console.log("news_fetc_error");
         return { ...state, error: action.payload,fetch_status:"failed"};    
         
        case NEWS_FETCH_INIT:
        console.log("news_fetc_start");
            return { ...state, news:{},fetch_status:"loading" };
        case NEWS_NOT_SAVED:
            console.log("new not saved to async storage");
            return{ ...state,news_saved:action.payload};
        case NEWS_SAVED:
            console.log("new saved to async storage");
            return{ ...state,news_saved:action.payload};
        case NEWS_FETCHED_FROM_STORAGE:
            console.log("NEWS FETCHED FROM ASYNC STORAGE");
            return{ ...state,news_cache:action.payload};
        case NEWS_NOT_FETCHED_FROM_STORAGE:
            console.log("NEWS not FETCHED FROM ASYNC STORAGE");
            return{ ...state,news_cache:{}}
        case SAVED_STATUS_FETCHED_FROM_STORAGE:
            console.log("SAVED_STATUS_FETCHED_FROM_STORAGE");
            return{...state,news_saved:action.payload}
        case SAVED_STATUS_NOT_FETCHED_FROM_STORAGE:
            console.log("SAVED_STATUS_NOT_FETCHED_FROM_STORAGE");
            return{...state,news_saved:action.payload}
        case SAVED_STATUS_SAVED_TO_STORAGE:
            console.log("SAVED_STATUS_SAVED_TO_STORAGE");
            return{...state}
        case SAVED_STATUS_NOT_SAVED_TO_STORAGE:
        console.log("SAVED_STATUS_NOT_SAVED_TO_STORAGE");
        return{...state}
        default:
            return state;
    }
};
