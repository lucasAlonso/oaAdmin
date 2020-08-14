import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path='/' component={Login} />

                <Route exact path='/home' component={Home} />
            </Router>
        </>
    );
};

export default Routes;
