import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './feedbackify.module.css'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

/**
 * A sticky footer that can expand upwards
 * @param {*} props
 */
class Feedbackify extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current: null,
            uButton: false,
            dbutton: false,
            selections: {
                up: props.up,
                down: props.down,
            },
        }
        this.handleClickType = this.handleClickType.bind(this)
    }

    /**
     * Manipulate the state by type
     */
    handleClickType(type){
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
                if (state.current === type){ // Toggle Off
                    deltas[type] = -1
                } else { // Turn on, check for shift from opposite
                    newCurrent = type
                    deltas[type] = 1
                    if (state.current === opposites[type]){
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

    /**
     * The buttons and up/down voting mechanism with limited single-vote scope
     */
    render(){
        const { upToggle, downToggle, className } = this.props
        return (
            <span className={className}>
                <Button onClick={this.handleClickType('up')} className={cx('up', 'btn', {active: this.state.current === 'up'})}>
                    {upToggle}{' '}<span className='up-counter'>{this.state.selections.up}</span>
                </Button>
                {' '}
                <Button onClick={this.handleClickType('down')} className={cx('down', 'btn', {active: this.state.current === 'down'})}>
                    {downToggle}{' '}<span className='down-counter'>{this.state.selections.down}</span>
                </Button>
            </span>
        )
    }
}

Feedbackify.propTypes = {
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    up: PropTypes.number.isRequired,
    down: PropTypes.number.isRequired,
    upToggle: PropTypes.node,
    downToggle: PropTypes.node,
}

Feedbackify.defaultProps = {
    upToggle: (<Icon icon={faArrowUp}/>),
    downToggle: (<Icon icon={faArrowDown}/>),
}

export default withStyles(styles)(Feedbackify)