import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar'
//import ProgressBar from './ProgressBar'
import Video from './Video'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function CourseMainPage(props) {
  const { classes } = props;

//Put progressBar back
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Course Main Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Video />
      </main>
    </div>
  );
}

CourseMainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CourseMainPage);