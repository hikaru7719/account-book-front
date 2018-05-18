import React from 'react';
import Drawer from 'material-ui/Drawer';
import List,{ ListItem,ListItemText} from 'material-ui/List';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

class MenuBottun extends React.Component {

  render() {


    return (
     <div>
      <Drawer variant="permanent" anchor={"left"}>
      <Divider />
       <List style={{width: 240}}>
        <ListItem button onClick={() => this.props.onClick("/acount")}><ListItemText primary={"Acount Book"}/></ListItem>
       </List>
      <Divider />
       <List style={{width: 240}}>
        <ListItem button onClick={() => this.props.onClick("/table")}><ListItemText primary={"Acount Table"}/></ListItem>
       </List>
      <Divider />
     </Drawer>
    </div>
   );
 }
}

export default MenuBottun;
