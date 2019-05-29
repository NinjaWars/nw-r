import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './feedbackify.module.css'

/**
 * A sticky footer that can expand upwards
 * @param {*} props
 */
class Feedbackify extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: null,
            uButton: false,
            dbutton: false,
            selections: {
                up: 0,
                down: 0,
            },
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            uButton: true,
        })
    }

    componentDidMount(){
        this.setState({
            selections:{
                up: 1000,
                down: 5000,
            }
        })
    }

    /**
     * Manipulate the state by type
     */
    handleClickType(type) {
        return (e)=> {
            this.setState(state => {
                const opposites = {
                    up: 'down',
                    down: 'up'
                }
                const deltas = {
                    up: 0,
                    down: 0,
                }
                let newCurrent = null
                if(state.current === type){ // Toggle Off
                    deltas[type] = -1
                } else { // Turn on, check for change to other
                    newCurrent = type
                    deltas[type] = 1
                    if(state.current === opposites[type]){
                        deltas[opposites[type]] = -1
                    }
                }
                return ({
                    current: newCurrent,
                    selections: {
                        up: state.selections.up + deltas['up'],
                        down: state.selections.down + deltas['down'],
                    }
                })})
            e.preventDefault()
        }
    }

    render() {
        return (
            <>
              <Button onClick={this.handleClickType('up')} className={cx('up', {active: this.state.current === 'up'})}>
                    Up {' '}<span className='up-counter'>{this.state.selections.up}</span>
              </Button>
              {' '}
              <Button onClick={this.handleClickType('down')} className={cx('down', {active: this.state.current === 'down'})}>
                    Down {' '}<span className='down-counter'>{this.state.selections.down}</span>
              </Button>
            </>
        )
    }
}

Feedbackify.propTypes = {
    classes: PropTypes.shape({}),
}

Feedbackify.defaultProps = {
    classes: {},
}

export default withStyles(styles)(Feedbackify)