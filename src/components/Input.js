import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {DatePicker} from 'material-ui-pickers';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';


class Input extends React.Component {


    render() {
        return (
            <div>
                <Grid container justify="center"  style={{flexGrow: 1,margin:'32px auto'}} >
                <form>
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
                                label="date"
                                style={{marginLeft:30,marginRight:30,width:500}}
                                format="YYYY/MM/DD"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="memo"
                        label="memo"
                        margin="memo"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        placeholder="free"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>
                    <Grid xs={{offset:8}}/>
                    <Grid item  style={{flexGrow: 1,margin:'32px'}}>
                        <Button variant="contained" color="primary" onClick={()=>this.props.onClick(this.props.spend)}>Add Spend</Button>
                    </Grid>
                </form>
                </Grid>

            </div>
        );
    }
}


export default Input;
