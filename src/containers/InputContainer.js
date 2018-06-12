import { connect } from 'react-redux';
import Input from '../components/Input';
import * as actions from '../actions/inputSpend';

const mapStateToProps = state => ({
        spend: state.spending.spend
});

const mapDispatchToProps= dispatch => ({
    onChange(key,value){
        dispatch(actions.changeName(key,value));
    },

    onClick(spend){
        dispatch(actions.addSpend(spend));
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(Input);