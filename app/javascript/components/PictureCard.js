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
import homeComponentStyles from "../../assets/javascripts/jss/components/homeComponentStyles.js";
import BuildIcon from '@material-ui/icons/Build';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


function generate(element) {
  return [0].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};

class PictureCard extends React.Component {

  render () {

    const { classes } = this.props;

    return (

      <React.Fragment>
        <div className={classes.title}>
          <Card className={classes.descriptionCard}>
            <div className={classes.descriptionCardDetails}>
              <CardMedia
                className={classes.picMedia}
                image={this.props.imageLocation}
                />
                
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

PictureCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string
};
export default withStyles(homeComponentStyles)(PictureCard);
