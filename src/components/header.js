import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = ({ siteTitle }) => (
  <AppBar position="static" color="inherit" style={{ marginBottom: '1rem' }}>
    <Toolbar>
      <Grid container justify="center">
        <Typography variant="title" color="inherit" >
          {siteTitle}
        </Typography>
      </Grid>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header);
