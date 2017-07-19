import { connect } from 'react-redux';
import component from './component';

const mapStateToProps = state => ({
  people: state.people,
  index: state.index
});

export default connect(mapStateToProps)(component);
