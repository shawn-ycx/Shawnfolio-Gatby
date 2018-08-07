import React, { Component } from 'react';
import Link from 'gatsby-link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const styles = {
    mainWrapper: {
        flexGrow: 1
    }
}

class Profile extends Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <img src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-228952291.jpg" />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="display1" align="center" color="primary">
                            Hello I am {this.props.siteMetadata.fname}.
                    </Typography>
                        <Typography variant="subtitle" align="center">
                            <p>A Web Developer.</p>
                            <Link to="/page-2/">Go to page 2</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string,
}

export default Profile;