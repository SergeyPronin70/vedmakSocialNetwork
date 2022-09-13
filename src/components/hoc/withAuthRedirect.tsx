import React from 'react';
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom'
import { AppStateType } from 'src/redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

type MapPropsType = {
  isAuth: boolean
}
type DispatchPropsType = {

}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let { isAuth, ...restProps } = props
    if (!isAuth) return <Navigate to='/login' />;
    //@ts-ignore
    return <WrappedComponent {...restProps as unknown as WCP} />
  }


  let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>
    (mapStateToPropsForRedirect)
    (RedirectComponent)

  return ConnectedAuthRedirectComponent;
}