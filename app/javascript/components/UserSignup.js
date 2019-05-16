import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types"

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
            name: '',
            password: '',
            password_conf: '',
            email: '',
            showPassword: false,
        };

        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
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
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl} variant="outlined">
                            <InputLabel>
                                Username
                            </InputLabel>
                            <OutlinedInput
                                id="name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                            />
                        </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl} variant="outlined">
                            <InputLabel>
                                Email
                            </InputLabel>
                            <OutlinedInput
                                id="email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl} variant="outlined">
                            <InputLabel htmlFor="adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl className={classes.formControl} variant="outlined">
                            <InputLabel htmlFor="adornment-password">
                                Re-type your password
                            </InputLabel>
                            <OutlinedInput
                                id="password_conf"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password_conf}
                                onChange={this.handleChange('password_conf')}
                                labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            onClick={this.handleUserSubmit()}
                        >
                            Create my account
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}


UserSignup.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(UserSignup);

