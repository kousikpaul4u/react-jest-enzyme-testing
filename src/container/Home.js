import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Home extends Component {

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
                {
                    footer ?
                        <Footer data-test="footer" message={footer} /> : null
                }
            </div>
        )
    }

}