import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            parentName: 'Robin hood Sr.'
        }
    }

    greetParent =(childName) =>
    {
        alert(`Hellow ${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <>
              <ChildComponent greetHandler= {this.greetParent}/>  
            </>
        )
    }
}

export default ParentComponent