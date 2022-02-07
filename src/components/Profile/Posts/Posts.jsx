import Post from './Post/Post';
import css from './Posts.module.css';

let Posts = (props) => {
    return (
        <div>
            My posts
            <div >
                <textarea cols="30" rows="10"></textarea>
                <button> add post </button>
            </div>
            <div className={css.posts}>
                {props.postsData.map(post => <Post key={post.id} post={post.text} likes={post.likes} />)}
            </div>
        </div>
    );
}

export default Posts;