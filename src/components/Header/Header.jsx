import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
        <img src='https://cdn.dribbble.com/users/758950/screenshots/12837455/school_wolf_dribbble.jpg' />

        <div className={s.loginBlock} >
          { props.isAuth ? props.login :
          <NavLink to={'/login'} >Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;