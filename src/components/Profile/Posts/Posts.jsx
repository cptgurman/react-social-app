import react from 'react';
import Post from './Post/Post';
import css from './Posts.module.css';



let Posts = () => {
    return (
        <div>
            My posts
            <div >
                <textarea cols="30" rows="10"></textarea>
                <button> add post </button>
            </div>
            <div className={css.posts}>
                <Post message='Hi how are you?' likes='likes: 15' />
                <Post message='First projct' likes='likes: 21' />
            </div>
        </div>
    );
}

export default Posts;