import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle';

class ParentLifeCycle extends Component {

    constructor(props)
    {
        super(props)

        this.state={
            name: 'ParentLifecycle'
        }

        console.log('ParentLifecycle constuctor');
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('ParentLifecycle getDrivedStateFromProps');
        return null;
    }

    componentDidMount()
    {
        console.log('ParentLifecycle componentDidMount');
    }

    shouldComponentUpdate()
    {
        console.log('ParentLifecycle shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevState)
    {
        console.log('ParentLifecycle getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate()
    {
        console.log('ParentLifecycle componentDidUpdate');
    }
    render() {

        console.log('ParentLifecycle render')
        return (
            <div>
                <h1>ParentLifecycle</h1>
                <button onClick= {()=> this.setState({name: 'vani'})}>Change State</button>
                <ChildLifeCycle />
            </div>
        )
    }
}

export default ParentLifeCycle