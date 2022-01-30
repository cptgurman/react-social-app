import react from 'react';
import css from './Header.module.css';


let Header = () => {
    return (
        <header className={css.header}>
            <img src='https://cdn-icons.flaticon.com/png/512/4401/premium/4401470.png?token=exp=1643308604~hmac=d9a535bf08f68f36a83c132f168de51e' className={css.logo}></img>
        </header>
    );
}

export default Header;