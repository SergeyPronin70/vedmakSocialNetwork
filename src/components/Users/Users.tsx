import React from "react";
import { UserType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'

let Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return <div >
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
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />)
            }
        </div>
    </div>
}
export default Users;

type PropsType ={
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}