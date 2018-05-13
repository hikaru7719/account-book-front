import React from 'react';
import Paper from 'material-ui/Paper';
import Menu,{MenuList, MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import Collapse from 'material-ui/transitions/Collapse';
import Grow from 'material-ui/transitions/Grow';
import { Link } from 'react-router-dom';

class MenuBottun extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
     <div>
      <Manager>
        <Target>
          <div
          ref={node => {
            this.target1 = node;
          }}
          >
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon aria-owns={open ? 'menu-list-grow' : null}
              aria-haspopup="true"
              onClick={this.handleToggle}/>
            </IconButton>
          </div>
        </Target>
        <Popper
          placement="bottom-start"
          eventsEnabled={open}
        >
          <ClickAwayListener onClickAway={this.handleClose}>
            <Grow in={open} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
              <Paper>
                <MenuList role="menu">
                  <MenuItem onClick={this.handleClose}><Link to="/acount">Acount Book</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to="/table">Account Table</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </MenuList>
              </Paper>
            </Grow>
          </ClickAwayListener>
        </Popper>
      </Manager>
     </div>
   );
 }
}

export default MenuBottun;
