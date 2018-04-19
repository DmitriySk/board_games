import React from 'react';
import PropTypes from 'prop-types';

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

    console.log(field);
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

SeaWar.propTypes = {
  theme: PropTypes.shape({
    field: PropTypes.string,
    row: PropTypes.string,
    cell: PropTypes.string
  }).isRequired
};

export default SeaWar;