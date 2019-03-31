import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";


class IndividualBioCard extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className = {classes.bioCard}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"

            >
              <Grid item className={classes.bioMediaGrid}>
              <CardMedia
                  className={classes.bioMedia}
                  image={this.props.myImage}
                />
              </Grid>
            </Grid>
            <CardContent className={classes.individualBioCard}>
              <Typography variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography className={this.props.title} color="textSecondary" gutterBottom>
                {this.props.team}
              </Typography>
              <Typography className={this.props.study} color="textSecondary" gutterBottom>
                {this.props.study}
              </Typography>
              <Typography component="p">
                {this.props.caption}
              </Typography>
                <Typography className={this.props.email} color="textSecondary" gutterBottom>
                  <a href={this.props.emailurl}>
                    {this.props.email}
                  </a>
                </Typography>
                <Typography className={this.props.email} color="textSecondary" gutterBottom>
                  <a href={this.props.linkedinurl}>
                    LinkedIn
                  </a>
                </Typography>
            </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

IndividualBioCard.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  study: PropTypes.string,
  caption: PropTypes.string,
  email: PropTypes.string,
  myImage: PropTypes.string,
  emailurl: PropTypes.string,
  linkedinurl: PropTypes.string
};
export default withStyles(homeComponentStyles)(IndividualBioCard);
