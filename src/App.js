import React from 'react'
import './App.css'
import { Redirect, Route, Switch } from 'react-router'
import { MainPage } from './pages'
import ToDo from './pages/todo/todo'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route
                    exact
                    path='/main'
                    component={ MainPage }
                />
                <Route
                    exact
                    path='/todo/:id'
                    component={ ToDo }
                />
                <Redirect
                  from='/'
                  to='/main'
                />
            </Switch>
            <div id='modal-root'> </div>
        </div>

    )
}

export default App
