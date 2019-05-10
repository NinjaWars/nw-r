import React, { Component } from 'react'
import './App.css'
import { default as Home } from './pages/home/Home'
import { default as Contact } from './pages/contact/Contact'
import { default as About } from './pages/about/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Router reference here: https://reacttraining.com/react-router/web/guides/quick-start

class App extends Component {
    render() {
        return (
            <>
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
