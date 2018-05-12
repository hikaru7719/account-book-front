import { connect } from 'react-redux';
import Month from '../components/Month';


const mapStateToProps = state => ({
    categories: state.categories.categories
  }
)

export default connect(mapStateToProps)(Month);
