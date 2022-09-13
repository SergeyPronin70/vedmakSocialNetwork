import React from "react";
import { NavLink } from "react-router-dom";
import { PostType } from "src/types/types";
import MyButton from "../../../common/MyButton";
import classes from './PostItem.module.css'

const PostItem: React.FC<PropsType> = ({post, number, remove}) => {
    

    return (
        <div className={classes.post}>
            <div>
                <strong>{post.id}. {post.title} </strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div>
                <div>
                    <NavLink to={'/profile/posts/' + post.id} >
                <MyButton onClick={() => remove(post.id)} >Open</MyButton>
                </NavLink>
                </div>
                <div>
                    <MyButton onClick={() => remove(post.id)} >Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem;

type PropsType = {
    post: PostType
    number: number
    remove: (id: number) => void
}