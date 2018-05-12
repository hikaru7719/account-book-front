import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuBottun from './MenuBottun'


class MenuComponent extends React.Component {


  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <MenuBottun />
            <Typography type="title" color="inherit" style={{fontSize: '24px'}}>
              Account Book
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default MenuComponent;
