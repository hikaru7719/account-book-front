import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import MenuComponent from './components/Menu';
import { Route } from 'react-router-dom';
import MonthContainer from './containers/MonthContainer';
import TablesContainer from './containers/TablesContainer';

class App extends Component {
  render() {
    return (
      <div style={{paddingLeft: 240}}>
        <CssBaseline/>
        <MenuComponent/>
        <div>
          <Route path="/acount" component={MonthContainer}/>
          <Route path="/table" component={TablesContainer}/>
        </div>
      </div>
    );
  }
}

export default App;
