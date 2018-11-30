import React from "react"
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Drawer from "@material-ui/core/Drawer"
import { withStyles } from '@material-ui/core/styles'
import ItemClasses from "./ItemClasses";
import ListSubheader from "@material-ui/core/ListSubheader/ListSubheader";
import sidebarComponentStyles from "../../assets/javascripts/jss/components/sidebarComponentStyles.js";


const drawerWidth = 240;


class Sidebar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            courses: [
                {secNum: 0.0, secName: "HelloWorld", hyperlink: "www.csbyus.com"},
                {secNum: 1.0, secName: "AgainWorld", hyperlink: "https://www.google.com"}
                ],
        };
    }
    render () {
        const { classes } = this.props;
        //FIXME: change state to props
        const courses = this.state.courses;
        const courseListFunc = (course) =>
            <ItemClasses secNum={course.secNum} secName={course.secName} hyperlink={course.hyperlink}/>;

        return (
            <div className={ classes.root}>
                <Drawer
                    className={ classes.drawer }
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor = "left"
                >
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">Course Overview</ListSubheader>}>
                        {this.state.courses.map((course) =>
                            <ItemClasses
                                key = {course.secNum.toString()}
                                secNum={course.secNum} secName={course.secName} hyperlink={course.hyperlink}/>)
                        }
                    </List>
                </Drawer>
            </div>
    );
  }
}

//this array should be in the form of
//const courses = [
//      {secNum： 0.0, secName: "HelloWorld", hyperlink: "www.csbyus.com"},
//      {secNum: ...., secName: ".......",    hyperlink: "......"}
//      ]

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    //TODO: add the following parameters into classes if possible
    courses: PropTypes.array,
};

export default withStyles(sidebarComponentStyles)(Sidebar)
