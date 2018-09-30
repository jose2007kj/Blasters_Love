import {
    SCHEDULE_DETAILS_FETCHED,
    SCHEDULE_DETAILS_FETCH_ERROR,
    SCHEDULE_DETAILS_FETCH_INIT
    
 } from '../actions/types';

 const INITIAL_STATE = {
        schedule_details: {},
        error:'',
        fetch_status:null
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SCHEDULE_DETAILS_FETCHED:
            return { ...state, schedule_details: action.payload,fetch_status:"success" };
        case SCHEDULE_DETAILS_FETCH_ERROR:
            return { ...state, error: action.payload,fetch_status:"failed" };
        case SCHEDULE_DETAILS_FETCH_INIT:
            return { ...state, schedule_details:{},fetch_status:"loading" };
        default:
            return state;
    }
};
