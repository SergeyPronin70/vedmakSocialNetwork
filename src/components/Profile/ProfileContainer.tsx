import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {HistoryRouterProps, Params, PathMatch, useMatch, useParams } from 'react-router-dom'; 
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from 'src/redux/redux-store';
import { ProfileType } from 'src/types/types';

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getUserProfile: (userId: number) => void 
  getStatus: (userId: number) => void 
  updateStatus: (status: string) => void 
  savePhoto: (file: File) => void 
  saveProfile: (profile: ProfileType) => Promise<any>
}

type PropsType = MapPropsType & DispatchPropsType & HistoryRouterProps & Params 

class ProfileContainer extends React.Component< PropsType> {
 
refreshProfile () {
  let userId = this.props?.match?.params.userId;
    
   if (!userId) {
     userId = this.props.authorizedUserId;
     if (!userId) {
       this.props.history.push('/login')
     }
   }
   if (!userId) {
    console.error('ID should exists')
   } else {
   this.props.getUserProfile(userId);
   this.props.getStatus(userId)
   }
}

  componentDidMount() {
    this.refreshProfile();

  }

  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props?.match?.params.userId != prevProps.match?.params.userId) {
    this.refreshProfile();
    }
  }
  
  render() {
    return ( 
        <Profile {...this.props} 
        isOwner={!this.props?.match?.params.userId}
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus} 
        savePhoto={this.props.savePhoto} />
    )
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


function withRouter<WCP> (Component: React.FC<WCP>) {
   let RouterComponent = (props: WCP) => {
    //может использовать useParams?

     //const match = useParams()
     const match = useMatch('/profile/:userId')
     return <Component {...props} match={match} />
   }
   return RouterComponent;
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, 
    { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
) (ProfileContainer)
