import React from 'react'

const PersonList = () => {

    const names= ['Vani', 'Vayu', 'Anjali', 'Sandeep'];
    return names.map(name => <h1>{name}</h1>)
}

export default PersonList
