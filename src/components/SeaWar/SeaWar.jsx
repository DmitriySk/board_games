import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import ShipType from './ship-types';
import OrientationType from './orientation-type';

const getArr10Obj = () => Array.from(new Array(10), () => ({}));

const field = [
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

const ships = [
  {
    type: ShipType.BATTLESHIP.id,
    coords: [1, 1],
    orientation: OrientationType.VERTICAL.id
  }
];

class SeaWar extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <div className={theme.battle_zone}>
        <Field theme={theme} field={field} />
        <Field theme={theme} field={field} ships={ships} />
      </div>
    );
  }
}

SeaWar.propTypes = {
  theme: PropTypes.shape({
    battle_zone: PropTypes.string.isRequired
  }).isRequired
};

export default SeaWar;