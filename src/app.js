import React from 'react'
import {Switch, Route} from 'react-router'

import Home from './pages/homePageComponent'

const App =()=>{
    return (
        <Switch>
            <Route path='/' render={(props)=>(
                <Home {...props} />
                )}
            />
        </Switch>
    );
}

export default App;
