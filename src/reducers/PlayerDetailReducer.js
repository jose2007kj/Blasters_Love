import {
    PLAYER_DETAILS_FETCHED,
    PLAYER_DETAILS_FETCH_ERROR,
    PLAYER_DETAILS_FETCH_INIT
    
 } from '../actions/types';

 const INITIAL_STATE = {
        player_details: {},
        error:'',
        fetch_status:null
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAYER_DETAILS_FETCHED:
            return { ...state, player_details: action.payload,fetch_status:"success" };
        case PLAYER_DETAILS_FETCH_ERROR:
            return { ...state, error: action.payload,fetch_status:"failed" };
        case PLAYER_DETAILS_FETCH_INIT:
            return { ...state, player_details:{},fetch_status:"loading" };
        default:
            return state;
    }
};
