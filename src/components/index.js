import React from 'react'
import Navbar from './navbar/navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Products from './pages/products/products'
import Gallery from './pages/gallery/gallery'
import AboutUs from './pages/aoutUs/aboutUs'
import SignUp from './pages/signUp/signUp'

function Main() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/products'><Products/></Route>
                    <Route exact path='/gallery'><Gallery/></Route>
                    <Route exact path='/about'><AboutUs/></Route>
                    <Route exact path='/sign'><SignUp/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
