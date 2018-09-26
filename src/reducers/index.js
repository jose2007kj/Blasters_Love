import { combineReducers } from 'redux';
import NewsReducer from './NewsReducer';
import NewsDetailsReducer from './NewsDetailsReducer';
import NavigationReducer from './NavigationReducer';
import PlayersReducer from './PlayerReducer';
import ScheduleReducer from './ScheduleReducer';
import PlayerDetailsReducer from './PlayerDetailReducer';
export default combineReducers({
  news:NewsReducer,
  newsDetails:NewsDetailsReducer,
  navigation:NavigationReducer,
  players:PlayersReducer,
  playerDetails:PlayerDetailsReducer,
  schedule:ScheduleReducer
});