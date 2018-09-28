import {
    NEWS_DETAILS_FETCHED,
    NEWS_DETAILS_FETCH_ERROR,
    NEWS_DETAILS_FETCH_INIT
    
 } from '../actions/types';

 const INITIAL_STATE = {
        news_details: {},
        error:'',
        fetch_status:''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_DETAILS_FETCHED:
            return { ...state, news_details: action.payload,fetch_status:"success" };
        case NEWS_DETAILS_FETCH_ERROR:
            return { ...state, error: action.payload,fetch_status:"failed" };
        case NEWS_DETAILS_FETCH_INIT:
            return { ...state, news_details:{},fetch_status:"loading" };
        default:
            return state;
    }
};
