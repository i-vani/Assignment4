import React from 'react'
import stylesheet from './stylesheet.css'

const parastyled={
    fontSize: '20px',
    backgroundColor:'yellow'
}

const Stylesheet = () => {
    return (
        <>
           <h1 className="primary">CSS StyleSheet</h1>
           <p className="secoundary">Irure eu officia irure eu tempor tempor officia dolore nisi veniam ipsum quis eiusmod. Ullamco adipisicing culpa enim mollit irure laboris labore ipsum nostrud amet. Incididunt aliqua pariatur nisi ullamco laboris pariatur consectetur. Dolore laboris esse culpa nulla. Sunt esse in est commodo voluptate deserunt adipisicing deserunt veniam excepteur.</p> 

           <p style={parastyled}>Mollit tempor cillum laborum cillum Lorem. Ut deserunt ut cupidatat aliqua quis dolor eu sunt officia consequat ad laborum id ad.</p>

           <p style={{color: 'red' , fontWeight: 'bolder'}}>Ex quis labore ipsum quis id mollit pariatur et exercitation incididunt culpa.Ut cillum dolor sint ex cupidatat aliquip.</p>
        </>

    )
}

export default Stylesheet
