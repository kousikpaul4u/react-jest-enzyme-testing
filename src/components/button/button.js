import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
export default function Button(props) {

    return (
        <button
            id={props.id}
            className={`button ${props.className}`}
            type={props.type}
            onClick={props.onClick}
            data-test="button-component"
        >
            {props.text}
        </button>
    )

}

Button.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}