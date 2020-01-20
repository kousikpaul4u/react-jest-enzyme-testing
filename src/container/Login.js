import React from 'react';
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


function Login(props) {

    function onClick() {
        props.fetchPosts();
    }

    return (
        <div>
            <Button id="login-button" text="Submit" type="button" onClick={onClick} />
            {
                props.data && props.data.map((post) =>
                    <ListItems title={post.title} desc={post.body} />
                )
            }
        </div>
    )

}

Login.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string
    }))
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);