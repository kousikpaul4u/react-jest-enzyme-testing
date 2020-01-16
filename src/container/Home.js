import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Login from 'container/Login';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { header, footer } = this.props;
        return (
            <div id="home-main-div" data-test="home-main-div">
                {
                    header ?
                        <Header data-test="header" message={header} /> : null
                }
                <Login />
                {
                    footer ?
                        <Footer data-test="footer" message={footer} /> : null
                }
            </div>
        )
    }
}

Home.propTypes = {
    header: PropTypes.string,
    footer: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default Home;