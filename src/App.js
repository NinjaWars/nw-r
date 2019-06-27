import React, { Component } from 'react'
import './App.css'
import { default as Home } from './views/home/Home'
import { default as Contact } from './views/contact/Contact'
import { default as About } from './views/about/About'
import { default as Checklist } from './views/checklist/Checklist'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider as ReduxProvider } from 'react-redux'
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
                        </div>
                    </Router>
                </ReduxProvider>
            </>
        )
    }
}

export default App
