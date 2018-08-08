import React, { Component } from 'react';
import Link from 'gatsby-link';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const styles = {
    mainWrapper: {
        height: '85vh'
    }
}

class Profile extends Component {
    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
                alignItems="center"
                style={styles.mainWrapper}
            >
                <Grid item>
                    <img src="https://image.shutterstock.com/image-vector/male-profile-picture-placeholder-vector-260nw-228952291.jpg" />
                </Grid>

                <Grid item>
                    <Typography variant="display1" align="center" color="primary">
                        Hello, I am {this.props.siteMetadata.fname}.
                    </Typography>
                    <Typography variant="subtitle" align="center">
                        <p>
                            A Web Developer born and raised in &nbsp;
                            <a href="https://www.google.com/maps/place/Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia/@3.1385036,101.6169495,12z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3034d3975f6730af:0x745969328211cd8!2sMalaysia!3b1!8m2!3d4.210484!4d101.975766!3m4!1s0x31cc49c701efeae7:0xf4d98e5b2f1c287d!8m2!3d3.1391449!4d101.6867065">
                                Malaysia
                            </a>
                            &nbsp; living a dreamy life in &nbsp;
                            <a href="https://www.google.com/maps/place/Austin,+TX/data=!4m2!3m1!1s0x8644b599a0cc032f:0x5d9b464bd469d57a?sa=X&ved=2ahUKEwjV753W3d3cAhXEna0KHXM6A3MQ8gEwDXoECAoQCw">
                                Austin, TX.
                            </a>
                            <br />
                            Simplistic yet elegant. Want a site just like this?
                        </p>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string,
}

export default Profile;