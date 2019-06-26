import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { default as Layout } from '../../components/Layout/Layout'

const styles = () => ({

})

const Checklist = () => (
  <>
    <Layout>
        <Typography variant="h1">Checklist</Typography>
    </Layout>
  </>
)

export default withStyles(styles)(Checklist)
