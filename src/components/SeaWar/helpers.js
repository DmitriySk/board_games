import ShipType from './ship-types';
import OrientationType from './orientation-type';

export const combineFieldWithShips = (field, ships) => {
  const newField = field.map(row => row.map(cell => ({...cell})));
  ships.forEach(ship => {
    const { coords: [x, y], orientation, type } = ship;
    const shipParams = ShipType.fromId(type);
    const length = shipParams.length;
    for (let i = 0; i < length; ++i) {
      const sy = orientation === OrientationType.VERTICAL.id ? y + i : y;
      const sx = orientation === OrientationType.HORIZONTAL.id ? x + i : x;
      newField[sy][sx].isShip = true;
    }
  });

  console.log(field);
  console.log(newField);

  return newField;
};
