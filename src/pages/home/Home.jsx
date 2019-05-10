import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Layout } from '../../components'

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
    skySpace: {
        height: '100%',
        minHeight: '80vh',
    },
})

/**
 * Homepage displays within layout and whatever else you want
 */
const Home = (props) => {
    const { classes } = props
    return (
      <Layout>
        <article className={classes.skySpace}>
          <Typography variant="h1" color="textSecondary">Homepage Title</Typography>
          <Typography>Homepage content</Typography>
        </article>
      </Layout>
    )
}

Home.propTypes = {
    classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(Home)
