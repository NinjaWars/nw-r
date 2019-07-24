import ACTIONS from './action'
import { cloneDeep, findIndex } from 'lodash'

// Redux reference: https://medium.com/wineofbits/use-redux-in-your-react-app-in-just-10-minutes-8da6e9f043c5

const defaultState = {
    items: [],
}

const itemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.CREATE_ITEM: {
            console.log(action)
            const item = action.payload
            const newItem = { id: state.items.length + 1, description: item }
            const newState = cloneDeep(state)
            newState.items.push(newItem)
            return newState
        }

        case ACTIONS.Types.DELETE_ITEM: {
            const newState = cloneDeep(state)
            const index = findIndex(newState.items, { id: action.payload })
            if (index !== -1){
                newState.items.splice(index, 1)
            }
            return newState
        }

        default:
            return state
    }
}

export default itemReducer
