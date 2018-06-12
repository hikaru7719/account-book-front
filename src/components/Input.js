import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
                    />
                    </Grid>

                    <Grid item xs={12}>

                        <TextField
                        id="cost"
                        label="cost"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="type"
                        label="type"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="date"
                        label="date"
                        margin="normal"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        id="memo"
                        label="memo"
                        margin="memo"
                        style={{marginLeft:30,marginRight:30,width:500}}
                        onChange={(e)=>this.props.onChange(e.target.id,e.target.value)}
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
