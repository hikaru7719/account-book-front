import React from 'react';
import Grid from '@material-ui/core/Grid';
import GitHubLogin from 'react-github-login';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class Login extends React.Component {


    render() {
        return (
            <div>

                <Grid container justify="center" style={{flexGrow: 1, margin: '32px auto'}} align="center">
                    <Paper>
                        <Typography variant="display1" component="h2" style={{paddingLeft: '70px',paddingRight: '70px',paddingTop: '30px',paddingBottom:'30px'}}>
                            Social Login
                        </Typography>

                        <Paper  style={{backgroundColor: '#444444', width:'200px',marginBottom:'30px'}}>
                            <GitHubLogin  className={"github"} redirectUri="http://localhost:3000/auth" clientId={process.env.REACT_APP_GITHUB_ID}
                            />
                        </Paper>
                    </Paper>
                </Grid>

            </div>
        );
    }
}


export default Login;
