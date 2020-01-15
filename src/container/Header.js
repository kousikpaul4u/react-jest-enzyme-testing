import React from 'react';
import logo from '../logo.svg';

export default function Headers(props) {

    const { message } = props;

    return (
        <div className="header-div" data-test="header-div">
            {message}
            <div className="logo" data-test="logo">
                <img id="logo" src={logo} alt="" className="img-bordered-sm logo" data-test="logo-img" />
            </div>
        </div>
    )
}