import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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

class UserProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "0",
            name: "you",
            password: "123456",
        };
        this.handleUserShow = this.handleUserShow().bind(this);
    }

    handleUserShow(user){
        fetch(`http://localhost:3000/api/v1/users/${user.id}`,
            {
                method: 'PUT',
                body: JSON.stringify({comment: comment}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.updateComment(comment)
        })
    }
    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="id"
                        label="id"
                        defaultValue="0"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        id="name"
                        label="Name"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
            </form>
            </React.Fragment>
        );
    }
}


UserProfile.propTypes = {
};
export default withStyles(homeComponentStyles)(UserProfile);

