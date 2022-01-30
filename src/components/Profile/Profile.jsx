import react from 'react';
import Posts from './Posts/Posts';
import css from './Profile.module.css';




let Profile = () => {
    return (
        <main className={css.main}>
            <div className={css.big_pic}>
                <img src='https://i.ytimg.com/vi/Vt9fCvsMKQ0/maxresdefault.jpg'></img>
            </div>
            <div className='avatar'>
                avatar
            </div>
            <div className='discription'>
                discription
            </div>
            <Posts />
        </main>
    );
}

export default Profile;