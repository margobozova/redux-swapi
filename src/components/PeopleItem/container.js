import component from './component.js';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {

  return { saveIndex: index => dispatch({ type: 'SAVE_INDEX', index: index })};
};


export default connect(null, mapDispatchToProps)(component);

