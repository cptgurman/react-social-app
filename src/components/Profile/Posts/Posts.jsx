import React from 'react';
import Post from './Post/Post';
import css from './Posts.module.css';




let Posts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            My posts
            <div >
                <textarea cols="30" rows="10" onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}> add post </button>
            </div>
            <div className={css.posts}>
                {props.postsData.map(post => <Post key={post.id} post={post.text} likes={post.likes} />)}
            </div>
        </div>
    );
}

export default Posts;