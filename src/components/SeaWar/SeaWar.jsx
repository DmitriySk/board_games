import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

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

class SeaWar extends React.Component {
  render() {
    const { theme } = this.props;

    return (
      <div className={theme.battle_zone}>
        <Field theme={theme} field={field} />
        <Field theme={theme} field={field} />
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