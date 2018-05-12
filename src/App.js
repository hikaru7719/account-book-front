import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import MenuComponent from './components/Menu';
import { Route } from 'react-router-dom';
import MonthContainer from './containers/MonthContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline/>
        <MenuComponent/>
        <Route path="/acount" component={MonthContainer}/>
      </div>
    );
  }
}

export default App;
