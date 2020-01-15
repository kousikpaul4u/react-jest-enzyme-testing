import React from 'react';

export default function Footer(props) {

    const { message } = props;

    return (
        <div className="footer-div" data-test="footer-div">
            {message}
        </div>
    )
}