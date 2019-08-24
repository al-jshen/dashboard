import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
const Store = window.require('electron-store');
const store = new Store();

class Body extends Component {

    render() {

        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        </ul>
                    </nav>

                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />

                </div>
            </Router>
        );
    }

}

export default Body;
