import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props)
    {
        super(props)

        this.state= 
        {
            isLoggedIn: true
        }
    }
    render() {

        // Method-1: 
        // if(this.state.isLoggedIn)
        //     return <h1>Welcome Vani</h1>
        // else
        //     return <h1>Welcome Guest</h1>

        // Method-2:
        // let message;
        // if(this.state.isLoggedIn)
        //     message= <h1>Welcome Vani</h1>
        //  else
        //     message= <h1>Welcome Guest</h1>
        // return <> {message}</>

        //Method-3: 
        // return this.state.isLoggedIn ? (<h1>Welcome Vani</h1>):(<h1>Welcome Guest</h1>)

        //Method-4: Used to display single things
        return this.state.isLoggedIn && <h1>Welcome Vani</h1>

        
    }
}

export default UserGreeting