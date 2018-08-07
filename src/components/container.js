import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class Container extends React.Component {
    state = {
        spacing: '16',
    };

    render() {
        const { spacing } = this.state;
        return (
            <Grid container style={styles.root} spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={Number(spacing)}>
                        <h1>Hey</h1>
                        {this.props.children()}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.func,
}

export default withStyles(styles)(Container);