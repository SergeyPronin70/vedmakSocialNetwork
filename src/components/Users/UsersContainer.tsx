import React from "react";
import { connect } from "react-redux";
import { requestUsers, follow, unfollow, actions} from "../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

const { followSuccess, unfollowSuccess, setUsers, setCurrentPage, 
    setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} = actions


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
       
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <h2>{ this.props.pageTitle }</h2>
            {this.props.isFetching ? 
            <Preloader /> 
            : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType ): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose<React.Component>(
    withAuthRedirect,
    connect< MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType > 
    (mapStateToProps, 
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
) (UsersContainer)


type MapStatePropsType = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: ( userId: number ) => void,
    requestUsers: (page: number, pageSize: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleFollowingProgress: ( isFetching: boolean, userId: number) => void
}
type OwnPropsType = {
    pageTitle: string,
}
type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType