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
            console.log("------ news details fetched ...cheers!!!!");
            return { ...state, news_details: action.payload,fetch_status:"success" };
        case NEWS_DETAILS_FETCH_ERROR:
            console.log("------ news details fetching failed ...oops!!!!");
            return { ...state, error: action.payload,fetch_status:"failed" };
        case NEWS_DETAILS_FETCH_INIT:
            console.log("------ news details loading ...wait!!!!");
            return { ...state, news_details:{},fetch_status:"loading" };
        default:
            return state;
    }
};
