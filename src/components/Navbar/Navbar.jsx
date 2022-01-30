import react from 'react';
import css from './Navbar.module.css';



let Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.item}>
        Profile
      </div>
      <div className={css.item}>
        Messages
      </div>
      <div className={css.item}>
        Photoes
      </div>
      <div className={css.item}>
        Music
      </div>
      <div className={css.item}>
        Settings
      </div>
    </nav>
  );
}

export default Navbar;