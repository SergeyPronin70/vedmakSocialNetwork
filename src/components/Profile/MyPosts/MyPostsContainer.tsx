import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from 'src/redux/redux-store';
import { actions, getPostList } from '../../../redux/profile-reducer';
import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';

const {addPostActionCreator, 
sortPostsActionCreator,
searchPost,
setUserProfile,
setStatus,
deletePost,
savePhotoSuccess,
setPosts,
setPageSize,
setCurrentPage,
toggleIsFetching} = actions

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    newTitle: state.profilePage.newTitle,
    profile: state.profilePage,
    pageSize: state.profilePage.pageSize,
    totalPostCount: state.profilePage.totalPostCount,
    currentPage: state.profilePage.currentPage,
    isFetching: state.profilePage.isFetching,
  }
}

//@ts-ignore
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>
(mapStateToProps, {addPostActionCreator, sortPostsActionCreator, searchPost, setUserProfile,
  setStatus,  deletePost,  savePhotoSuccess,  setPosts,  setPageSize,  setCurrentPage,  toggleIsFetching, getPostList})
  (MyPosts);

export default MyPostsContainer;