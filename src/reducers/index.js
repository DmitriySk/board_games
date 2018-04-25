import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import seaWar from './seaWar';

export default combineReducers({
  routerReducer,
  seaWar
});
