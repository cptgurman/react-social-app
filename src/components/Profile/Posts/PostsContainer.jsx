import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';

let PostsContainer = (props) => {
    let state = props.state.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(updateNewPostTextActionCreator(action));
    }

    return (<Posts updateNewPostText={onPostChange} addPost={addPost} post={props.posts} />);
}

export default PostsContainer;