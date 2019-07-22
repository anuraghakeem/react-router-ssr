import React from 'react'
import {Switch, Route} from 'react-router'

import Home from './pages/homePageComponent'

export const App =()=>{
    return (
        <Switch>
            <Route path='/' render={(props)=>(
                <Home {...props} />
                )}
            />
        </Switch>
    );
}