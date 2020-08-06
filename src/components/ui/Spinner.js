import React from 'react';
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img 
            src={spinner} 
            style={styleSpinner} 
            alt="loading" 
        />
    )
}

const styleSpinner = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

export default Spinner