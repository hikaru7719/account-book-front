import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuComponent from './components/Menu';
import { Route } from 'react-router-dom';
import MonthContainer from './containers/MonthContainer';
import TablesContainer from './containers/TablesContainer';
import Input from './containers/InputContainer';
import Login from './components/Login'



class App extends Component {
  render() {
    return (
      <div style={{paddingLeft: 240}}>
        <CssBaseline/>
        <MenuComponent/>
        <div>
          <Route path="/acount" component={MonthContainer}/>
          <Route path="/table" component={TablesContainer}/>
          <Route path="/input" component={Input}/>
          <Route path="/login" component={Login}/>
        </div>
      </div>
    );
  }
}

export default App;
