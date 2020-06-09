import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import InfoSegment from './InfoSegment';
import aboutComponentStyles from '../../assets/javascripts/jss/components/aboutComponentStyles';
import AboutLogo from './AboutLogo';


const About = () => (
  <>
    {/* Use CssBaseline to fix header bar spacing */}
    <CssBaseline />
    {/* Big picture */}
    <AboutLogo />
    <InfoSegment />
  </>
);

export default withStyles(aboutComponentStyles)(About);
