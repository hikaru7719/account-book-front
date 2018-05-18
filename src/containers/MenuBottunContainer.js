import { connect } from 'react-redux';
import MenuBottun from '../components/MenuBottun';
import {push} from 'react-router-redux';
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps= dispatch => ({
  onClick(path){
    dispatch(push(path));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuBottun);
