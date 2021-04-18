import { connect } from 'react-redux';
import Store from './Store';

const mapStateToProps = (state) => ({
  boxes: state.storePage.boxes,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
