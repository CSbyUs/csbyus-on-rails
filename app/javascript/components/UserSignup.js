import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class UserSignup extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            id: "0",
            name: "you",
            password: "000000",
            email: "nihaoya@csbyus.com"
        };

        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    handleUserSubmit(){

        axios.post('api/v1/users', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        })
            .then(function(repsonse) {
                console.log(reponse);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render () {
        const { classes } = this.props;
        //TODO: update state info

        return (
            <React.Fragment>
                    <form className={classes.container} noValidate autoComplete="off">

                        <TextField
                            required
                            id="name"
                            label="Username"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />

                        <TextField
                            required
                            id="email"
                            label="Email"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />

                        <TextField
                            required
                            id="password"
                            label="Password"
                            className={classes.textField}
                            fullWidth
                            margin="normal"
                            helperText="Some requirements of the password"
                            variant="outlined"
                        />

                        <TextField
                            required
                            id="password_confirmation"
                            label="Re-enter your password"
                            className={classes.textField}
                            margin="normal"
                            fullWidth
                            variant="outlined"
                        />

                        <Button
                            variant="contained"
                            onClick={this.handleUserSubmit()}
                        >
                            Create my account
                        </Button>

                    </form>
            </React.Fragment>
        );
    }
}


UserSignup.propTypes = {
};
export default withStyles(styles)(UserSignup);

