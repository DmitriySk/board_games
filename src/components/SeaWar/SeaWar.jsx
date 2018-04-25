import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

class SeaWar extends React.Component {
  render() {
    const { theme, field, ships } = this.props;

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
  }).isRequired,
  field: PropTypes.array.isRequired,
  ships: PropTypes.array.isRequired
};

export default SeaWar;