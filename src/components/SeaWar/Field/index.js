import { themr } from 'react-css-themr';
import Field from './Field';
import theme from './Field.scss';

const ThemedField = themr('Field', theme)(Field);

export default ThemedField;