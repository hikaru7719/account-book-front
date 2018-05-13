import { connect } from 'react-redux';
import Tables from '../components/Tables';


const mapStateToProps = state => ({
    allSpend: state.spending.allSpend,
    spend:state.spending.spend,
  }
)

export default connect(mapStateToProps)(Tables);
