import react from 'react';
import css from './ProfileInfo.module.css';





let ProfileInfo = (props) => {
    return (
        <div className={css.profile_info}>
            <div className={css.big_pic}>
                <img src='https://i.ytimg.com/vi/Vt9fCvsMKQ0/maxresdefault.jpg'></img>
            </div>
            <div className='avatar'>
                {props.avatar}
            </div>
            <div className='discription'>
                {props.discription}
            </div>
        </div>
    );
}

export default ProfileInfo