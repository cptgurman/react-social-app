import react from 'react';
import Posts from './Posts/Posts';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';





let Profile = () => {
    return (
        <main className={css.main}>
            <ProfileInfo avatar='AVATAR' discription='описание' />
            <Posts />
        </main>
    );
}

export default Profile;