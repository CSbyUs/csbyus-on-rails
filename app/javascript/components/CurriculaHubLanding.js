import React from "react"
import PropTypes from "prop-types"
import CurriculumCard from "./CurriculumCard"
import { withStyles } from '@material-ui/core/styles'
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { NavLink } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


var courseData = require('../../assets/data/coursesInfo.js');

class CurriculaHubLanding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
  };
}

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  getCourseData(){
    var coursesJsonArray = courseData.courses;
    return coursesJsonArray;
  };

  render () {
    const { classes } = this.props;
    const data = this.getCourseData();
    const cards = data.map((card) =>
        <CurriculumCard title = {card.title} author = {card.author}
              content = {card.content} url = {card.url}/>
          );

    return (
        <React.Fragment>
        <CssBaseline/>
        <div className={classes.root2}>
          <main className={classes.layout2}>

            <Paper className={classes.curriculaTitleHeader}>
                <div className={classes.courseName}>
                    <Typography component="h1" class={classes.newFont} variant="h3" color="inherit" gutterBottom>
                        CurriculaHub
                    </Typography>
                    <Typography variant="h5" class={classes.newFont} color="inherit" paragraph>
                        A one-stop platform for you to explore, adapt, add, and discuss open-source curricula
                    </Typography>
                </div>
            </Paper>




              <Grid container spacing={24}>
                  {cards.map(card => (
                    // change xs setting to 12 for one card per row
                     <Grid item xs={12} sm={6} key={card.toString()}>
                         {card}
                     </Grid>
                   ))}
             </Grid>

            {/* Contribute */}
            <div className={classes.root2}>
                  <Typography variant="h3" class={classes.newFont} align="left" color="textPrimary" gutterBottom>
                    Contribute to CurriculaHub
                  </Typography>
                <Typography variant="h4" class={classes.newFont} gutterBottom>
                  <p>
                    Interested in contributing to the CurriculaHub community? We'd love to collaborate with you. Please fill out <NavLink to={'/joinus'}>this form</NavLink> and include the following in your message:
                    the resources you'd like to share or adapt and relevant links so we can view them. Our curriculum team will reach out to you via email after you submit the form as soon as possible.
                  </p>
                </Typography>
            </div>
            {/* End Contribute */}
            </main>
            <Fab size="large" color="primary" aria-label="Add" className={classes.fab} onClick={this.handleDialogOpen}>
              <AddIcon />
            </Fab>

            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"What would you like to do?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You are welcome to use our LessonBuilder tool or simply upload your own lesson plan!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Upload
                </Button>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Use LessonBuilder
                </Button>
              </DialogActions>
            </Dialog>

          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(CurriculaHubLanding);
