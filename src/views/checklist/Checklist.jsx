import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl,
    Typography,
} from "@material-ui/core"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { default as Layout } from '../../components/Layout/Layout'
import { default as Tile } from '../../components/Tile/Tile'
import ACTIONS from '../../modules/action'


const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    },
    textField: {
        background: 'white',
    }
})

class Checklist extends Component{
    state = {
        items: []
    }
    generate = () => {
        return this.props.items.map(item => (
            <ListItem key={item.id}>
                <ListItemText primary={item.description} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={this.handleDelete}
                        value={item.id}
                    >
                        <Icon icon={faTrash} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('Submitted info: ', this.state.items, this.state.item)
        if (this.state.item !== ""){ // Only add if item isn't blank
            this.props.createItem(this.state.item)
            // add the task to store
            this.setState({ item: "" }) // Clear the field
        }
    }

    handleDelete = event => {
        // Delete the task from the store
        this.props.deleteItem(event.target.value)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // Simple grid with list display, and the form to create new entries.
    render(){
        const { classes } = this.props
        return (
            <div>
                <div>
                    <Typography variant="body1">Check Items</Typography>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <FormControl>
                            <TextField
                                label="New Task"
                                id="margin-dense"
                                value={this.state.item || ''}
                                className={classes.textField}
                                margin="dense"
                                name="item"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Button type='submit'>Add</Button>
                        </FormControl>
                    </form>
                </div>
                <div>
                    <Grid item container justify="space-evenly" alignItems="center">
                        <div className={classes.demo}>
                            <List dense={false}>{this.generate()}</List>
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

Checklist.propTypes = {
    createItem: PropTypes.func,
    deleteItem: PropTypes.func,
}

const mapStateToProps = state => ({
    items: state.items
})

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
})

const DChecklist = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checklist)

const ChecklistView = ({ classes }) => (
  <>
    <Layout>
        <Typography variant="h1" color="primary">Checklist</Typography>
        <Tile theme='light'>
            <DChecklist classes={classes}/>
        </Tile>
    </Layout>
  </>
)

export default withStyles(styles)(ChecklistView)