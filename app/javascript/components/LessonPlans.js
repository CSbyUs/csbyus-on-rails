﻿import React from "react"
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


var courseData = require('../../assets/data/formattedData.js');

class LessonPlans extends React.Component {

  getCourseData(){
    let checkboxes = this.props.location.state.checkboxdata;
    const searchCriteria = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            searchCriteria.push({
                id: checkbox.id,
                description: checkbox.description,
                standard: checkbox.id + ": " + checkbox.description
              })
          }
    });
    let age = this.props.match.params.age;
    let topic = this.props.match.params.topic;
    var searchData = courseData['lessonPlans']['gradeLevel'][age]['curriculum'][topic];
    var coursesJsonArray = [];
    var i,j;
    searchData.forEach((lessonPlan) => {
        for (i = 0; i < lessonPlan.standards.length; i++) {
            lessonPlan['standards'][i] = lessonPlan['standards'][i].substring(0,5)
        }
        for (j = 0; j < searchCriteria.length; j++) {
            if (lessonPlan.standards.includes(searchCriteria[j].id)) {
                coursesJsonArray.push({
                    id: lessonPlan.id,
                    title: lessonPlan.title,
                    author: lessonPlan.author,
                    description: lessonPlan.description,
                    standards: lessonPlan.standards,
                    estimatedTime: lessonPlan.estimatedTime,
                    materials: lessonPlan.materials,
                    courseUrl: lessonPlan.courseUrl

                })
                break;
            }
        }

      })
  return coursesJsonArray;
  };

  render () {
    const { classes } = this.props;
    const data = this.getCourseData();
    const cards = data.map((card) =>
        <CurriculumCard title={card.title} standards={"Standard(s): " + card.standards} time={"Estimated time: " + card.estimatedTime + " minutes"}
            content={card.description} url={card.courseUrl}/>
          );

    return (
        <React.Fragment>
        <CssBaseline/>
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




              <Grid container spacing={24}>
                  {cards.map(card => (
                    // change xs setting to 12 and sm to 6 for multiple cards per row
                     <Grid item xs={12} key={card.toString()}>
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
                    Interested in contributing to the CurriculaHub community? We'd love to collaborate with you. To use our CSbyUs LessonBuilder, click on the blue button at the bottom right of your screen! Or you can fill out <NavHashLink to={'/home#contact-form'}>this form</NavHashLink> and include the following in your message:
                    the resources you'd like to share or adapt and relevant links so we can view them. Our curriculum team will reach out to you via email after you submit the form as soon as possible.
                  </p>
                </Typography>
            </div>
            {/* End Contribute */}
            </main>
            <Fab size="large" color="primary" aria-label="Add" className={classes.fab} href="https://forms.gle/4SoLjikkKNwMm6cJ8" target ="_blank">
              <AddIcon />
            </Fab>
          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(LessonPlans);
