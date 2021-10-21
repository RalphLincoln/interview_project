import React from 'react';

import './LoadingSpinner.css';
import LoadingIcon from '../../Images/loading.gif';

const LoadingSpinner = props => {
    return (
        <div className='d-flex align-items-center vh-100 justify-content-center'>
            <img src={LoadingIcon} alt={LoadingIcon} className='img-fluid loading-img' />
        </div>
    );
};

export default LoadingSpinner;