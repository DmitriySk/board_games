import Enum from '../../utils/enum';

export default new Enum({
  PATROL: { id: 1, length: 1, name: 'Patrol Boat' },
  DESTROYER: { id: 2, length: 2, name: 'Destroyer' },
  SUBMARINE: { id: 3, length: 3, name: 'Submarine' },
  BATTLESHIP: { id: 4, length: 4, name: 'Battleship' },
  AEROCARRIER: { id: 5, length: 5, name: 'Aircraft Carrier' }
});
