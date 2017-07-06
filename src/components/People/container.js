import { connect } from 'react-redux';
import component from './component';

const mapStateToProps = state => ({
  people: state.people
});

export default connect(mapStateToProps)(component);
