import {
    PLAYER_DETAILS_FETCHED,
    PLAYER_DETAILS_FETCH_ERROR,
    PLAYER_DETAILS_FETCH_INIT

} from './types';
import { PLAYERS_DETAILS} from './api';
var axios = require('axios');
export const fetchStartPlayerDetails = () => {
    return {
        type: PLAYER_DETAILS_FETCH_INIT
    };
};
export const fetchPlayerDetails = (player) => {
    return (dispatch) => {
        axios.get(PLAYERS_DETAILS+player.player_id+'_player.json')
  .then(function (response) {
   dispatch({ type: PLAYER_DETAILS_FETCHED, payload: response });
                  
  })
  .catch(function (error) {
    dispatch({ type: PLAYER_DETAILS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
            
