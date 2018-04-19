import React from 'react';
import PropTypes from 'prop-types';

class Field extends React.Component {
  render() {
    const { theme, field } = this.props;

    return (
      <div className={theme.field}>
        {
          field.map((row, ri) => {
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
                        className={theme.cell}
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
    cell: PropTypes.string
  }).isRequired,
  field: PropTypes.array.isRequired
};

export default Field;