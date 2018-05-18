import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuBottun from '../containers/MenuBottunContainer'


class MenuComponent extends React.Component {


  render() {
    return (
      <div>
        <AppBar position="static" style={{left:240}}>
          <Toolbar>
            <Typography type="title" color="inherit" style={{fontSize: '24px'}}>
              Account Book
            </Typography>
          </Toolbar>
        </AppBar>
        <MenuBottun />
      </div>
    );
  }
}


export default MenuComponent;
