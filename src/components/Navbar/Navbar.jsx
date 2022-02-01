import react from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

let style = ({ isActive }) => isActive ? css.active : css.item;
// Получаем активную ссылку и передаем css для активной ссылкиуб

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div>
        <NavLink to="/profile" className={style}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={style}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/photoes" className={style}>Photoes</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={style}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={style}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;