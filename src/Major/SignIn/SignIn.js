import React, { useState } from 'react';
import './signin.css';

import Logo from '../../Images/logo.png';

import LoadingSpinner from "../../Minor/LoadingSpinner/LoadingSpinner";

const SignIn = () => {
    const [loading, setLoading] = useState(false)
    return (
        <div>
            {
                loading ?
                    <LoadingSpinner />
                    :
                    <div className='container min-vh-100'>
                        <div
                            className='d-flex mt-3 justify-content-center justify-content-md-start justify-content-lg-start'>
                            <img src={ Logo } className="img-fluid logoss" alt='logo'/>
                        </div>

                    </div>
            }
        </div>
    )
}
export default SignIn;