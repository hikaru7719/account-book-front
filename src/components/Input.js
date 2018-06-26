import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {DatePicker} from 'material-ui-pickers';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

class Input extends React.Component {


    render() {
        return (
            <div>
                <Grid container justify="center"  style={{flexGrow: 1,margin:'32px auto'}} align="center">
                    <Paper>
                <form>
                    <Typography variant="display1" component="h2"  style={{padding:'30px'}}>
                        Enter the expenditure
                    </Typography>
                    <Grid item xs={12}>

                        <TextField
                        id="name"
                        label="Name"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        placeholder="goods name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    </Grid>

                    <Grid item xs={12}>

                        <TextField
                        id="cost"
                        label="cost"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        placeholder="¥999,999"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="type"
                        label="type"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        placeholder="衣類"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className="picker">
                            <DatePicker
                                id="date"
                                label="date"
                                style={{marginLeft:30,marginRight:30,width:500}}
                                format="YYYY/MM/DD"
                                margin="normal"
                                value={this.props.spend.date}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(x,e)=>this.props.onChange("date",x.getFullYear()+"/"+(x.getMonth()+1)+"/"+x.getDate())}
                            />
                        </div>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="memo"
                        label="memo"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        placeholder="free"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid  style={{flexGrow: 1,margin:'32px'}}>
                        <Button variant="contained" color="primary" onClick={()=>this.props.onClick(this.props.spend)}>Add Spend</Button>
                    </Grid>
                </form>
                    </Paper>
                </Grid>

            </div>
        );
    }
}


export default Input;
