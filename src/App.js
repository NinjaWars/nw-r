import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider as ReduxProvider } from 'react-redux'

import './App.css'
import { default as Home } from './views/home/Home'
import { default as Contact } from './views/contact/Contact'
import { default as About } from './views/about/About'
import { default as Checklist } from './views/checklist/Checklist'
import { default as Intro } from './views/intro/Intro'
import { default as Fight } from './views/fight/Fight'
import { default as List } from './views/list/List'
import { default as MapView } from './views/map/Map'
import { default as Inventory } from './views/inventory/Inventory'
import { default as SkillsView } from './views/skills/Skills'
import { default as Shrine } from './views/shrine/Shrine'
import { default as EventsView } from './views/events/EventsView'
import { default as MessagesView } from './views/messages/MessagesView'
import { default as Clan } from './views/clan/Clan'
import { default as Field } from './views/field/Field'
import { default as Shop } from './views/shop/Shop'
import { default as News } from './views/news/News'
import configureStore from './modules/store'
// Router reference here: https://reacttraining.com/react-router/web/guides/quick-start

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

class App extends Component {
    render() {
        return (
            <>
                <ReduxProvider store={reduxStore}>
                    <CssBaseline />
                    <Router>
                        <div className="App">
                            <Route path="/" exact component={Home} />
                            <Route path="/contact/" component={Contact} />
                            <Route path="/about/" component={About} />
                            <Route path="/checklist/" component={Checklist} />
                            <Route path="/intro/" component={Intro} />
                            <Route path="/fight/" component={Fight} />
                            <Route path="/ninjas/" component={List} />
                            <Route path="/map/" component={MapView} />
                            <Route path="/inventory/" component={Inventory} />
                            <Route path="/skills/" component={SkillsView} />
                            <Route path="/shrine/" component={Shrine} />
                            <Route path="/events/" component={EventsView} />
                            <Route path="/messages/" component={MessagesView} />
                            <Route path="/clan/" component={Clan} />
                            <Route path="/field/" component={Field} />
                            <Route path="/shop/" component={Shop} />
                            <Route path="/news/" component={News} />
                        </div>
                    </Router>
                </ReduxProvider>
            </>
        )
    }
}

export default App
