import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { default as Layout } from '../../components/Layout/Layout'

const styles = () => ({

})

const About = () => (
  <>
    <Layout>
        <Typography variant="h1">About</Typography>
    </Layout>
  </>
)

export default withStyles(styles)(About)
