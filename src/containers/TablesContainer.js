import { connect } from 'react-redux';
import Tables from '../components/Tables';
import {push} from "react-router-redux";


const mapStateToProps = state => ({
    allSpend: state.spending.allSpend,
    spend:state.spending.spend,
  }
)

const mapDispatchToProps= dispatch => ({
    onClick(path){
        dispatch(push(path));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Tables);
