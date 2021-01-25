import React from 'react'
import Navbar from './navbar/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function Main() {
    return (
        <div>
            <Router>
                <Navbar/>
            </Router>
        </div>
    )
}

export default Main
