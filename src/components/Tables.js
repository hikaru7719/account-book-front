import React from 'react';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from '@material-ui/core/Button'

export default class Tables extends React.Component{

  render() {
    const list = [];
    for(let spend of this.props.allSpend) {
      list.push(
        <TableRow key={spend.id}>
            <TableCell component="th" scope="row">{spend.name}</TableCell>
            <TableCell numeric>{spend.cost}</TableCell>
            <TableCell numeric>{spend.type}</TableCell>
            <TableCell numeric>{spend.date}</TableCell>
            <TableCell numeric>{spend.memo}</TableCell>
        </TableRow>
        );
      }

      return (
        <div>
          <Grid container justify="center" className="cardContainer" style={{flexGrow: 1,margin:'32px auto'}} spacing={16}>
          <Grid item xs={8}>
              <Button variant="contained" color="primary" onClick={() => this.props.onClick("/input")}>Add Spend</Button>
          <Card>
            <Table>
              <TableHead>
              <TableRow>
                <TableCell><Typography component="p">Name</Typography></TableCell>
                <TableCell numeric><Typography component="p">Price</Typography></TableCell>
                <TableCell numeric><Typography component="p">Type</Typography></TableCell>
                <TableCell numeric><Typography component="p">Date</Typography></TableCell>
                <TableCell numeric><Typography component="p">Memo</Typography></TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                {list}
              </TableBody>
            </Table>
          </Card>
          </Grid>
          </Grid>
        </div>
      );

  }
}
