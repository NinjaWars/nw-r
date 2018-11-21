import React from "react";
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Layout } from '../../components';

const styles = theme => ({
    skySpace: {
        height: '100%',
        minHeight: '80vh',
    },
});

/**
 * Homepage displays within layout and whatever else you want
 */
const Home = (props) => {
    const { classes } = props;
    return (
        <Layout>
            <article className={classes.skySpace}>
                <Typography variant="h1" color="textSecondary">Homepage Title</Typography>
                <Typography>Homepage content</Typography>
            </article>
        </Layout>
    );
};

export default withStyles(styles)(Home);

