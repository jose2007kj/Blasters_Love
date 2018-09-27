import {
    NAV_MENU_CLICKED,
    NAVIGATE_TO_MAIN,
    NAVIGATE_TO_NEWS,
    SET_TITLE,
    NAVIGATE_TO_NEWS_DETAILS,
    NAVIGATE_TO_PLAYERS,
    NAVIGATE_TO_PLAYERS_DETAILS,
    NAVIGATE_TO_SCHEDULE,
    NAVIGATE_TO_STANDING
} from './types';

export const navigationMenuClicked = (menu) => {
    return {
        type: NAV_MENU_CLICKED,
        payload: menu,
    };
};

export const navigateToScreen = (screen, item) => {
    switch (screen) {
        case 'News':
            return {
                type: NAVIGATE_TO_NEWS
            };
        case 'Main':
            return {
                type: NAVIGATE_TO_MAIN
            };
        case 'News Details':
            return {
                type: NAVIGATE_TO_NEWS_DETAILS,
                payload: item 
};
        case 'Players' :
            return {
                type: NAVIGATE_TO_PLAYERS
            };
        case 'Player Details':
            return {
                type:  NAVIGATE_TO_PLAYERS_DETAILS,
                payload: item
            };
            case 'Schedule' :
            return {
                type: NAVIGATE_TO_SCHEDULE,
            };
            case 'Standing' :
            return {
                type: NAVIGATE_TO_STANDING,
            };
        default:
            return 0;
    }
};

export const setNavigationTitle = (title) => {
        return {
            type: SET_TITLE,
            payload: { title }
        };
};
