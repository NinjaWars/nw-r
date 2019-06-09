import React from 'react'
import ReactDOM from 'react-dom'
import { default as Chat } from './Chat'

describe('<Chat />', () => {
    it('renders a list of chat messages and the chat input', () => {
        const initialDate = new Date()


        const chats = [
            {by:'James', message:'Some random chat'},
            {by:'William', message:'Some random chat'},
            {by:'James', message:'Some random chat'},
            {by:'William', message:'Some random chat'},
            {by:'James', message:'Some random chat'},
            {by:'William', message:'Some random chat'},
        ]
        let i = 1
        const chats2 = chats.map((entry)=>{
            initialDate.setMinutes(initialDate.getMinutes() + i)
            entry.datetime = initialDate
            entry.id = i
            i++
            return entry
        })
        const div = document.createElement('div')
        ReactDOM.render(<Chat chats={chats2} />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
