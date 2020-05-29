import React from "react"
import PropTypes from "prop-types"
import CurriculumCard from "./CurriculumCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavHashLink as NavHashLink } from 'react-router-hash-link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FlatButton from 'material-ui/FlatButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


var standardsData = require('../../assets/data/standardsData.js');

class CurriculaSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            checkboxbools: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    
    handleInputChange(event) {
        for (const each of this.state.checkboxbools) {
            if (each.id == event.target.value || event.target.value == "selectall") {
                each.checked = event.target.checked;
            }
        }
        this.setState({ checkboxbools: this.state.checkboxbools });
    }

    handleOnClick(event) {
        for (const box of this.state.checkboxbools) {
            if (box.checked) {
                return;
            }
        }
        alert("Please select at least one checkbox. If no preference, select the select all checkbox.");
        event.preventDefault();
    }
    
    getCurriculaData() {
        let age = this.props.match.params.age;
        let topic = this.props.match.params.topic;
        var standardsJsonArray = standardsData['standards']['gradeLevel'][age]['curriculum'][topic];
        return standardsJsonArray;
    };

    render() {
        const { classes } = this.props;
        const data = this.getCurriculaData();
        const empty = (data.length == 0);
        if (!empty) {
            if (this.state.checkboxbools.length == 0) {
                data.forEach((standard) => {
                    this.state.checkboxbools.push({
                        id: standard.id,
                        description: standard.id + ": " + standard.description,
                        checked: true
                    })
                })
                this.state.checkboxbools.push({
                    id: "selectall",
                    description: "Select all of the above",
                    checked: true
                })
            }
        }
        


        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.root2}>
                    <main className={classes.layout2}>

                        <Paper className={classes.curriculaTitleHeader}>
                            <div className={classes.courseName}>
                                <Typography component="h1" className={classes.newFont} variant="h3" color="inherit" gutterBottom>
                                    CurriculaHub
                    </Typography>
                                <Typography variant="h5" className={classes.newFont} color="inherit" paragraph>
                                    A one-stop platform for you to explore, adapt, add, and discuss open-source curricula
                    </Typography>
                            </div>
                        </Paper>

                        <div>
                            {empty &&
                                <h2>
                                    We don't currently have any curricula for your criteria. Stay tuned for an update!
                                </h2>
                             }
                         </div>

                            {!empty && 
                                this.state.checkboxbools.map((checkbox) =>
                                    <div>
                                        <FormControlLabel control={<Checkbox value={checkbox.id} onChange={this.handleInputChange} checked={checkbox.checked} />} label={checkbox.description} />
                                    </div>
                                )
                            }
                        

                        <div>
                            {!empty &&
                                <Link to={{
                                    pathname: "/results/" + this.props.match.params.age + "/" + this.props.match.params.topic,
                                    state: {
                                        checkboxdata: this.state.checkboxbools
                                    }
                            }} onClick={this.handleOnClick}>
                                <Button variant="contained" color="secondary" className={classes.button}>
                                        <SearchIcon />
                                        Search
                                </Button>
                                </Link>
                            }
                        </div>

                        {/* Contribute */}
                        <div className={classes.root2}>
                            <Typography variant="caption" class={classes.newFont} gutterBottom>
                                <p>
                                    Interested in contributing to the CurriculaHub community? We'd love to collaborate with you. To use our CSbyUs LessonBuilder, click on the blue plus sign at the bottom right of your screen! Or you can fill out <NavHashLink to={'/home#contact-form'}>this form</NavHashLink> and include the following in your message:
                   the resources you'd like to share or adapt and relevant links so we can view them. Our curriculum team will reach out to you via email as soon as possible after you submit the form.
                                 </p>
                            </Typography>
                        </div>
                        {/* End Contribute */}
                    </main>
                    <Fab size="large" color="primary" aria-label="Add" className={classes.fab} href="https://forms.gle/4SoLjikkKNwMm6cJ8" target="_blank">
                        <AddIcon />
                    </Fab>
                </div>
            </React.Fragment>




        );
    }
}

export default withStyles(homeComponentStyles)(CurriculaSearch);
