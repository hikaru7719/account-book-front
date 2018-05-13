import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


export default class Month extends React.Component{

  render() {
    const list = [];
    for(let month of this.props.categories) {
      list.push(
        <Grid item xs={12}  lg={4} key={month.month}>
          <Card padding={16}>
            <CardContent>
              <Typography variant="headline" component="h2">
                {month.month}
              </Typography>
              <Typography component="p">
                {month.total}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More</Button>
            </CardActions>
          </Card>
        </Grid>
        );
      }

      return (
        <div>
        <Grid container style={{flexGrow: 1,}} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" className="cardContainer" style={{flexGrow: 1,margin:'auto',width:'80%'}} spacing={16}>
            { list }
           </Grid>
          </Grid>
        </Grid>
        </div>
      );

  }
}
