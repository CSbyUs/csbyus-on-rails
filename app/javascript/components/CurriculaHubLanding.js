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

class CurriculaHubLanding extends React.Component {

  render () {
      const { classes } = this.props;

      const data =
          [
          {title:"Mobile Citizens", author:"CSbyUs",
              content:"Engaging in the same processes as computer scientists at Google, middle students work in teams to build a mobile app that addresses a self-determined community need. Recommended frequency: 90 mins per week for 5 weeks",
              url: 'https://docs.google.com/document/d/14HhURHo2u9WwidZ83Px70qQ8U8411ClAh--IZ4Oxz20/edit?usp=sharing'},
          {title:"Day of Data", author:"CSbyUs",
              content:"Introduction to the world of data science for middle school age students. In a full day, students and mentors work in teams through the data science process, answering research questions with real-world data.",
              url: 'https://docs.google.com/document/d/1i5TnWBwk2yvZpTetN5yb3ByLC2J2oVcdh71c4XSVHno/edit?usp=sharing'},
          {title:"CS First with Scratch", author:"Google",
              content:"Introduction to programming activities created by Google's CS First initiative for students ages 9-14. Includes a variety of self-paced and self-guided learning tracks.",
              url: 'https://csfirst.withgoogle.com/c/cs-first/en/curriculum.html'},
          {title:"Bootstrap: Data Science", author:"BootstrapWorld.org",
              content:"From BootstrapWorld.org: In Bootstrap:Data Science, students form their own questions about the world around them, analyze data using multiple methods, and write a research paper about their findings. The module covers functions, looping and iteration, data visualization, linear regression, and more.",
              url: 'https://www.bootstrapworld.org/materials/spring2019/courses/data-science/en-us/'},
          {title:"Computer Science Principles", author:"Code.org",
              content:"From code.org: This year-long course can be taught as an AP or non-AP course - no prerequisites required for students or for teachers new to computer science",
              url: 'https://code.org/educate/csp'},
          {title:"Hour of Code", author:"Code.org",
              content:"From code.org: The Hour of Code is a global movement reaching tens of millions of students in 180+ countries. Anyone, anywhere can organize an Hour of Code event or try any of the over 200+ one-hour tutorials, available in over 45 languages.",
              url: 'https://code.org/hourofcode/overview'},
          {title:"Basic Programming in Scratch", author:"MIT Media Lab",
              content:"A collection of detailed guides for teaching basic programming concepts using Scratch, an interactive web-based drag-and-drop coding interface perfect for young learners with no prior experience. Choose from themes like animation, art, music, games, and stories.",
              url: 'https://scratch.mit.edu/ideas'},
          {title:"Teaching Privacy", author:"CSForAll Teachers",
              content:"From csforallteachers.org: The Teaching Privacy curriculum from the International Computer Science Institute and UC Berkeley has a full set of freely-available, classroom-tested lesson plans for teaching about how online privacy works. The lessons are aimed at high school and early undergrad; CSP-compatible but usable in any CS class (or other classes!).",
              url: 'https://csforallteachers.org/resource/teaching-privacy-curriculum-0'}
            ];

      const cards = data.map((card) =>
          <CurriculumCard title = {card.title} author = {card.author}
                content = {card.content} url = {card.url}/>
      );



    return (
        //TODO: see if this works
        <React.Fragment>
          <div className={classes.layout2}>

            <Paper className={classes.curriculaTitleHeader}>
                <div className={classes.courseName}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Curricula Hub
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
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
            <Divider/>
            <div className={classes.root2}>
                  <Typography variant="h5" align="left" color="textPrimary" gutterBottom>
                    Contribute to CurriculaHub
                  </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <p>
                    Interested in contributing to the CurriculaHub community? We'd love to collaborate with you. Please fill out <NavLink to={'/joinus'}>this form</NavLink> and include the following in your message:
                    the resources you'd like to share or adapt and relevant links so we can view them. Our curriculum team will reach out to you via email after you submit the form as soon as possible.
                  </p>
                </Typography>
            </div>
            {/* End Contribute */}
          </div>
        </React.Fragment>


    );
  }
}

export default withStyles(homeComponentStyles)(CurriculaHubLanding);
