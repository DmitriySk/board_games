import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import SeaWar from './SeaWar';
import theme from './SeaWar.scss';

const ThemedSeaWar = themr('SeaWar', theme)(SeaWar);

const mapStateToProps = state => ({
  field: state.seaWar.field,
  ships: state.seaWar.ships
});

export default connect(mapStateToProps)(ThemedSeaWar);