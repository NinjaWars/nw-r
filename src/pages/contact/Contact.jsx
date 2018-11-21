// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Layout } from '../../components';

const styles = () => ({

});

const Contact = (props) => {
    return (
        <>
            <Layout>
                <Typography variant="h1">Contact Page</Typography>
            </Layout>
        </>
    );
};

export default withStyles(styles)(Contact);