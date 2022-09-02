//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import HeaderContainer from './components/Header/HeaderContainer';
import React from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { withSuspense } from './components/hoc/withSuspense';
import PostPage from './components/Profile/MyPosts/Post/PostPage';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer') )
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer') )


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
      // change on hashRouter to avoid crash when reloading page
      <BrowserRouter basename={process.env.PUBLIC_URL} >
<React.Suspense fallback={ <Preloader /> } >
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar
          />
          <div className='app-wrapper-content'>
            <Routes>
              <Route exact path='/'
                element={<ProfileContainer/> } />
              <Route exact path='/profile/*'
                element={<ProfileContainer/> } />
              <Route path='/dialogs/*'
                element={<DialogsContainer/> } />
              <Route path='/users'
                element={<UsersContainer pageTitle={'Witchers'} />
                } />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
              <Route exact path='/profile/posts/:id' element={<PostPage />} />
              <Route path='*' element={<div>404 NOT FOUND</div>} />
            </Routes>
          </div>
        </div>
        </React.Suspense>
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