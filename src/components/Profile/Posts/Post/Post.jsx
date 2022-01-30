import react from 'react';
import css from './Post.module.css';



let Post = (props) => {
    return (

        <div className={css.post}>
            <img src="https://vraki.net/sites/default/files/inline/images/30_55.jpg" alt="" className={css.avatar} />
            <div className={css.item}>
                {props.message}
            </div>
            <span className='like'>  {props.likes} </span>
        </div>

    );
}

export default Post;