import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar: React.FC = (props) => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
        </div>
        
        {/* <div className={s.item}>
          <NavLink to='/friends' className={navData => navData.isActive ? s.activeLink : s.item}>Friends</NavLink>
          <div>
          <img src={props.state[0].avatar} />
          </div>
          <div>
          <img src={props.state[1].avatar} />
          </div>
        </div> */}
      </nav>
    )
}

export default Navbar;