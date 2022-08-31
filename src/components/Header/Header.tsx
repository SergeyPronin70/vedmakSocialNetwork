import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
        <img src='https://cdn.dribbble.com/users/758950/screenshots/12837455/school_wolf_dribbble.jpg' />

        <div className={s.loginBlock} >
          { props.isAuth 
          ? <div> {props.login} - <button onClick={props.logout}>Logout</button> </div> 
          : <NavLink to={'/login'} >Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;

export type MapPropsType = {
  isAuth: boolean
  login: string | null
  }
  export type DispatchPropsType = {
  logout: () => void
  }