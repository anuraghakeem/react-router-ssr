import React from 'react'
import Helmet from 'react-helmet'

import Counter from './../comp/Counter'

 const Home =()=>{
    const consoleMethod=()=>{
        console.log("Button pressed");
    }
    const head=()=>{
        return(
            <Helmet>
                <title>My Page title</title>
                <meta name="description" 
                content="This is the home page with place for SEO data"
                />
            </Helmet>
        )
    } 
    return (
        <div>
            {head()}
            <h1>
                My Home Page
            </h1>
            <p>
                Content
            </p>
            <button onClick={()=>consoleMethod()}>Console dummy</button>
            <Counter />
        </div>
    );
}

export default Home;