import { Actions } from 'react-native-router-flux';
import {
    NAV_MENU_CLICKED,
    NAVIGATE_TO_NEWS,
    NAVIGATE_TO_MAIN,
    NAVIGATE_TO_NEWS_DETAILS,
    NAVIGATE_TO_PLAYERS_DETAILS,
    SET_TITLE,
    NAVIGATE_TO_PLAYERS,
    NAVIGATE_TO_SCHEDULE,
    NAVIGATE_TO_STANDING
} from '../actions/types';

const INITIAL_STATE = {
    menu: 'News',
    page: '',
    newsDetailUrl:'',
    playerDetailUrl:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NAV_MENU_CLICKED:
            return { ...state, menu: action.payload };
        case NAVIGATE_TO_NEWS:
            console.log("inside news reducer....");
            Actions.news();
            return state;
        case NAVIGATE_TO_NEWS_DETAILS:
            Actions.newsDetails({ newsDetailUrl: action.payload });
            return state;
        case NAVIGATE_TO_PLAYERS:
            console.log("inside naviagte to players reducer...");
            Actions.players();
            return state;  
        case NAVIGATE_TO_PLAYERS_DETAILS:
            console.log("inside navigate to player detailes reducer"+JSON.stringify(action.payload))
            Actions.playerDetails({ playerDetailUrl: action.payload });
            return state;
        case NAVIGATE_TO_SCHEDULE:
            console.log("inside naviagte to schedule reducer...");
            Actions.schedule();
            return state;  
        case NAVIGATE_TO_STANDING:
            console.log("inside naviagte to standing reducer...");
            Actions.standing();
            return state;
        case NAVIGATE_TO_MAIN:
            console.log("inside main reducer...."); 
            setTimeout(()=>{
                Actions.main();
                return state;
            },1); 
        case SET_TITLE:
            Actions.refresh({ title: action.payload });
            return state;
        default:
            return state;
    }
};