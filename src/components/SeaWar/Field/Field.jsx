import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import { combineFieldWithShips } from '../helpers';

class Field extends React.Component {
  render() {
    const { theme, field, ships } = this.props;
    const combinedField = combineFieldWithShips(field, ships);

    return (
      <div className={theme.field}>
        {
          combinedField.map((row, ri) => {
            return (
              <div
                key={ri}
                className={theme.row}
              >
                {
                  row.map((cell, ci) => {
                    return (
                      <div
                        key={ci}
                        className={cn({
                          [theme.cell]: true,
                          [theme.ship]: cell.isShip
                        })}
                      >
                        {`${ri}:${ci}`}
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
}

Field.propTypes = {
  theme: PropTypes.shape({
    field: PropTypes.string,
    row: PropTypes.string,
    cell: PropTypes.string,
    ship: PropTypes.string
  }).isRequired,
  field: PropTypes.array.isRequired,
  ships: PropTypes.array
};

Field.defaultProps = {
  ships: []
};

export default Field;