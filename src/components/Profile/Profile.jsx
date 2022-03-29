import PostsContainer from './Posts/PostsContainer';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let Profile = (props) => {
    return (
        <main className={css.main}>
            <ProfileInfo avatar='AVATAR' discription='описание' />
            <PostsContainer store={props.store} />
        </main>
    );
}

export default Profile;