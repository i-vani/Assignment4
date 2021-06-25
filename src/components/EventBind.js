import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props)
    {
        super(props)

        this.state= {
            message: 'Hello World'
        }

        // Method 3: this.handleClick= this.handleClick.bind(this);
    }

    handleClick= () =>//making function a arrow function is Method 4
    {
        this.setState(
            {
                message: 'Hello JS'
            }
        )
    }
    render() {
        return (
            <div>
                    <p>{this.state.message}</p> 
                    {/*Method 1: <button onClick={this.handleClick.bind(this)}> Click</button> */}
                    {/*Method 2: <button onClick={()=> this.handleClick()}>Click</button> */}
                    {/*Method 3: <button onClick={this.handleClick}>Click</button> */}
                    <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}


export default EventBind