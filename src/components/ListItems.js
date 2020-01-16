import React from 'react';
import PropTypes from 'prop-types';

export default function ListItems(props) {

    const { title, desc } = props;
    return (
        <div data-test="list-items-component">
            <h2 data-test="title">{title}</h2>
            <div data-test="description">
                {desc}
            </div>
        </div>
    )

}

ListItems.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}