const headerComponentStyles = theme => ({
  appBar: {
    position: 'relative',
    margin: '0 auto',
    top: 0,
    padding: '0%',
    backgroundColor: theme.palette.primary.lightblue,
  },
  theFont: {
    fontFamily: theme.Typography.fontFamily[0],
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50,
  }, 
  text: {
    color: 'white',
  },
  fullList: {
    width: 'auto',
  },
});

export default headerComponentStyles;
