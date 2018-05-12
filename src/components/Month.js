import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



export default class Month extends React.Component{

  render() {
    const list = [];
    for(let month of this.props.categories) {
      list.push(
          <Card>
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
        );
      }

      return (
        <div>
          { list }
        </div>
      );
  }
}
