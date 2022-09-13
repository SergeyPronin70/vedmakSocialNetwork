//import logo from './logo.svg';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { UsersPage } from './components/Users/UsersContainer';
import { LoginPage } from './components/Login/Login';
import React from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import PostPage from './components/Profile/MyPosts/Post/PostPage';
import 'antd/dist/antd.css'
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Header } from './components/Header/Header';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage = React.lazy(() => import('./pages/chat/ChatPage'))

const { Content, Footer, Sider } = Layout;

const items = [
  {path: '', 
  label: 'My profile',
  icon: <UserOutlined/>,
  children: [
    {path: '/profile', label: 'Profile'},
    {path: '/dialogs', label: 'Dialogs'}, ]
  },
  {path: '/users',
  label: 'Users', 
  icon: <LaptopOutlined/>,
  children: [
    {path: '/users', label: 'Users'},
    {path: '/chat', label: 'Chat'}, ]
 }
]

const items1: MenuProps['items'] = [items[1]].map((item, key) => ({
  key,
  label: <NavLink to={item.path}>{item.label}</NavLink>,
}));

const items2: MenuProps['items'] = items.map(
  (item, index) => {
    const key: any = String(index + 1);

    return {
      key: `sub${key}`,
      icon: item.icon,
      label: <NavLink to={item.path}>{item.label}</NavLink>,
      
      children: item.children === undefined ? null : item.children.map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: <NavLink to={_.path}>{_.label}</NavLink>,
          
        };
      }),
    };
  },
);
class App extends React.Component<PropsType & DispatchType> {

    componentDidMount() {
      this.props.initializeApp();
    }

    componentWillUnmount() {
    }

    render() {
      if (!this.props.initialized) {
        return <Preloader />
      }

      return (
        /*

        // change on hashRouter to avoid crash when reloading page
        <BrowserRouter basename={process.env.PUBLIC_URL} >
  <React.Suspense fallback={ <Preloader /> } >
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar
            />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path='/'
                  element={<ProfileContainer/> } />
                <Route path='/profile/*'
                  element={<ProfileContainer/> } />
                <Route path='/dialogs/*'
                  element={<DialogsContainer/> } />
                <Route path='/users'
                  element={  <UsersPage pageTitle={'Witchers'}  />
                  } />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile/posts/:id' element={<PostPage />} />
                <Route path='*' element={<div>404 NOT FOUND</div>} />
              </Routes>
            </div>
          </div>
          </React.Suspense>
        </BrowserRouter> */
        <BrowserRouter basename={process.env.PUBLIC_URL} >

        <Layout>

          <Header items1={items1} />

          <Content style={{ padding: '0 50px' }}>

            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider className="site-layout-background" width={200}>
               <nav>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                  items={items2}
                />
                </nav>
              </Sider>
              
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
              
  <React.Suspense fallback={ <Preloader /> } >
          
            <Routes>
                <Route path='/'
                  element={<ProfileContainer/> } />
                <Route path='/profile/*'
                  element={<ProfileContainer/> } />
                <Route path='/dialogs/*'
                  element={<DialogsContainer/> } />
                <Route path='/users'
                  element={  <UsersPage pageTitle={'Witchers'}  />
                  } />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/chat' element={<ChatPage />} />
                <Route path='/profile/posts/:id' element={<PostPage />} />
                <Route path='*' element={<div>404 NOT FOUND</div>} />
                </Routes>
          
          </React.Suspense>
        

              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>WitcherApp ©2022 Created by Segey Pronin</Footer>
        </Layout>
        
        </BrowserRouter>
      )
    }
  }

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
  //withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const WitcherApp: React.FC = () => {
  return <Provider store={store}>
    <AppContainer />
  </Provider>
}
export default WitcherApp;

type PropsType = ReturnType<typeof mapStateToProps>
type DispatchType = {
  initializeApp: () => void
}