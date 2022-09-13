import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { follow, unfollow, FilterType, requestUsers } from "src/redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getPageSize, 
        getTotalUsersCount, getUsers, getUsersFilter } from "src/redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'
import { UsersSearchForm } from "./UsersSearchForm";
 
export const Users: React.FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()
    const navigation = useNavigate()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const parsed = Object.fromEntries(searchParams.entries()) as {friend: string, term: string, page: string}

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term}
        if (!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null 
                                                : parsed.friend === 'true' ? true : false}
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        navigation(`/users?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`)
        
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const followDispatch = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowDispatch = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return <div >

        <UsersSearchForm onFilterChanged={onFilterChanged} />

        <div className={s.paginator__wrapper}>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
        </div>
        <div>
            {users.map(u =>
                <User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    follow={followDispatch}
                    unfollow={unfollowDispatch}
                />)
            }
        </div>
    </div>
}

type PropsType = {
    
}