import { themr } from 'react-css-themr';
import SeaWar from './SeaWar';
import theme from './SeaWar.scss';

const ThemedSeaWar = themr('SeaWar', theme)(SeaWar);

export default ThemedSeaWar;