import React, { Component } from 'react'
import './App.css'
import { default as Home } from './views/home/Home'
import { default as Contact } from './views/contact/Contact'
import { default as About } from './views/about/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
// Router reference here: https://reacttraining.com/react-router/web/guides/quick-start

class App extends Component {
    render() {
        return (
            <>
                <CssBaseline />
                <Router>
                    <div className="App">
                        <Route path="/" exact component={Home} />
                        <Route path="/contact/" component={Contact} />
                        <Route path="/about/" component={About} />
                    </div>
                </Router>
            </>
        )
    }
}

export default App
