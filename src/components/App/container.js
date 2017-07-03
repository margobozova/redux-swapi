import { connect } from 'react-redux';
import component from './component';

const mapStateToProps = state => ({
    people: state.people
  });


const mapDispatchToProps = dispatch => ({
  savePeople: people => dispatch({ type: 'SAVE_PEOPLE', people})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
