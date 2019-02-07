import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import courseCardComponentStyles from "../../assets/javascripts/jss/components/courseCardComponentStyles.js";

class CourseCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        window.location = this.props.url
    }

    render() {
        // FIXME: change all the state to props when server is ready
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea onClick = {this.handleClick}>
                    <CardMedia
                        component="img"
                        alt= {this.props.img}
                        className={classes.media}
                        image={this.props.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography className={this.props.title} color="textSecondary" gutterBottom>
                            {this.props.author}
                        </Typography>
                        <Typography component="p">
                            {this.props.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

CourseCard.propTypes = {
    classes: PropTypes.object.isRequired,
    img: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
};

export default withStyles(courseCardComponentStyles)(CourseCard);