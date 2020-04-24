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
import Grid from '@material-ui/core/Grid';
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import Hidden from '@material-ui/core/Hidden';
import { NavHashLink as NavHashLink } from 'react-router-hash-link';



class AgegroupCard extends React.Component {
  render () {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.agegroupCard}>
          <CardActionArea href={this.props.url}>
            <CardContent>
              <Typography variant="h5" className={classes.orangeFont} component="h2" align="center">
                <b>{this.props.agegroup}</b>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
  }
}

AgegroupCard.propTypes = {
    agegroup: PropTypes.string,
    url: PropTypes.string
};
export default withStyles(homeComponentStyles)(AgegroupCard);
