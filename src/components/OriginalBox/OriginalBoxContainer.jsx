import { connect } from 'react-redux';
import OriginalBox from './OriginalBox';

const mapStateToProps = (state) => ({
  boxes: state.originalBoxPage.boxes,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OriginalBox);
