import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { Layout } from '../../components'

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
