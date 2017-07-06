import { connect } from 'react-redux';
import component from './component';

const mapStateToProps = state => ({
    people: state.people,
    index: state.index
  });


const mapDispatchToProps = dispatch => ({
  savePeople: people => dispatch({ type: 'SAVE_PEOPLE', people })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
