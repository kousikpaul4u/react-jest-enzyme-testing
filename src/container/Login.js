import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'components/button/button';
import ListItems from 'components/ListItems';
import { fetchPosts } from 'actions/posts';

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

const mapStateToProps = state => {
    return {
        data: state.common && state.common.data ? state.common.data : [],
    };
};


class Login extends Component {

    constructor() {
        super();
        this.state = {
            hideButton: false
        }
    }

    onClick = () => {
        this.hideSubmitButton();
        this.props.fetchPosts();
    }

    hideSubmitButton = () => {
        this.setState({
            hideButton: !this.state.hideButton
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.hideButton ?
                        null
                        : <Button data-test="submit-button" id="login-button" text="Submit" type="button" onClick={this.onClick} />
                }
                {
                    this.props.data && this.props.data.map((post) =>
                        <ListItems key={post.title} data-test="list-items" title={post.title} desc={post.body} />
                    )
                }
            </div>
        )
    }

}

Login.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
    }))
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);