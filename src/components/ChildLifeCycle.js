import React, { Component } from 'react'

class ChildLifeCycle extends Component {

    constructor(props)
    {
        super(props)

        this.state={
            name: 'ChildLifecycle'
        }

        console.log('ChildLifecycle constructor')
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log('ChildLifecycle getDrivedStateFromProps');
        return null;
    }

    componentDidMount()
    {
        console.log('ChildLifecycle componentDidMount');
    }

    shouldComponentUpdate()
    {
        console.log('ChildLifecycle shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevState)
    {
        console.log('ChildLifecycle getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate()
    {
        console.log('ChildLifecycle componentDidUpdate');
    }
    render() {

        console.log('ChildLifecycle render')
        return (
            <div>
                <h1>ChildLifecycle</h1>
            </div>
        )
    }
}


export default  ChildLifeCycle