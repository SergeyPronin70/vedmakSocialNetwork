import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUserLogin, selectIsAuth } from 'src/redux/auth-selectors';
import { logout } from 'src/redux/auth-reducer';

export const Header: React.FC<MapPropsType> = ({ items1 }) => {
  const { Header } = Layout

  const isAuth = useSelector(selectIsAuth)
  const login = useSelector(selectCurrentUserLogin)
  const dispatch = useDispatch()
  const logoutCallback = () => dispatch(logout())

  return (
    <Header className="header">
      <div className="logo" />
      <Row>
        <Col span={18}>
          <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1} />
        </Col>

        {isAuth
          ? <>
            <Col span={1}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Col>
            <Col span={5} >
               <Button onClick={logoutCallback}>Logout</Button>
            </Col>
          </>
          : <Col span={6}>
            <Button>
              <NavLink to={'/login'} >Login</NavLink>
            </Button>
            

          </Col>}
      </Row>


    </Header>


    /*<header className={s.header}>
    <img src='https://cdn.dribbble.com/users/758950/screenshots/12837455/school_wolf_dribbble.jpg' />

    <div className={s.loginBlock} >
      { props.isAuth 
      ? <div className={s.loginBlockName}> {props.login} - <button onClick={props.logout}>Logout</button> </div> 
      : <NavLink to={'/login'} >Login</NavLink> }
    </div>
  </header>*/
  )
}


export type MapPropsType = {
  items1: ItemType[] | undefined
}
export type DispatchPropsType = {
  logout: () => void
}