import Posts from './Posts/Posts';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let Profile = (props) => {
    return (
        <main className={css.main}>
            <ProfileInfo avatar='AVATAR' discription='описание' />
            <Posts postsData={props.postsData} />
        </main>
    );
}

export default Profile;