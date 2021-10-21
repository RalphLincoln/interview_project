import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Bg from './Images/bg.jpg';

import SignIn from "./Major/SignIn/SignIn";

const App = () => {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' component={ SignIn } />
            </Switch>
        </div>
    )
};
export default App;