import React from 'react';

// Files
import preloader from '../../../assets/images/Spinner.gif'

let Preloader = (props) => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader;