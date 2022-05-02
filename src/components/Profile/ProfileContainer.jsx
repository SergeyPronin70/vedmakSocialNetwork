import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import {useLocation, useMatch, useNavigate, useParams} from 'react-router-dom'; 
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
 
  constructor() {
    let userId = this.props.match.userId;
    
     if (!userId) {
       userId = '2';
     }
     this.props.getUserProfile(userId);
  }
  
  render() {
    return ( <div>
        <Profile {...this.props} profile={this.props.profile}  />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

// let withRouter = (Component) => {
//   let ComponentWithRouterProp = (props) => {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     let match = useMatch(`/profile/${userId}`)
    
//     return (
//       <Component
//       {...props}
//       router = { { location, navigate, params, match } }
//       />
//     )
//   }
//   return ComponentWithRouterProp;
// }

const withRouter = (Component) => {
   let RouterComponent = (props) => {
     const match = useMatch('/profile/:userId')
     return <Component {...props} match={match} />
   }
   return RouterComponent;
}

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
) (ProfileContainer)
