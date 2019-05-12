import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import * as ReactDOM from "react-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";

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
            id: "",
            name: "",
            password: "",
            email: ""
        };

        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    componentDidMount() {
        this.forceUpdate();
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };


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
                <div className={classes.container}>

                    <FormControl className={classes.formControl} variant="outlined">
                        <InputLabel>
                            Username
                        </InputLabel>
                        <OutlinedInput
                            id="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} variant="outlined">
                        <InputLabel>
                            Email
                        </InputLabel>
                        <OutlinedInput
                            id="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} variant="outlined">
                        <InputLabel>
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} variant="outlined">
                        <InputLabel>
                            Re-type your password
                        </InputLabel>
                        <OutlinedInput
                            id="password_conf"
                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                        />
                    </FormControl>

                        <Button
                            variant="contained"
                            onClick={this.handleUserSubmit()}
                        >
                            Create my account
                        </Button>

                    </div>
            </React.Fragment>
        );
    }
}


UserSignup.propTypes = {
};
export default withStyles(styles)(UserSignup);

