import { combineReducers } from 'redux';
import {
  SEA_WAR_UPDATE_FIELD,
  SEA_WAR_UPDATE_SHIPS
} from '../actions/types';
import ShipType from '../components/SeaWar/ship-types';
import OrientationType from '../components/SeaWar/orientation-type';

const getArr10Obj = () => Array.from(new Array(10), () => ({}));
const tempField = [
  [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ],
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
  getArr10Obj(),
];

const tempShips = [
  {
    type: ShipType.BATTLESHIP.id,
    coords: [1, 1],
    orientation: OrientationType.VERTICAL.id
  }
];

/**
 * isVisible - visible menu reducer
 */
function field(state = tempField, action) {
  switch (action.type) {
    case SEA_WAR_UPDATE_FIELD:
      return action.payload;
    default:
      return state;
  }
}

/**
 * isVisible - visible menu reducer
 */
function ships(state = tempShips, action) {
  switch (action.type) {
    case SEA_WAR_UPDATE_SHIPS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  field,
  ships
});
