import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
import './../Transition.module.css'
import { PostType } from "src/types/types";

const PostList: React.FC<PropsType & DispatchType> = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Posts not found...
            </h1>)
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            <TransitionGroup>
            {posts.map((post, index) =>
            <CSSTransition key={post.id} timeout={500} classNames="post" >
                <PostItem remove={remove} number={index + 1} post={post}  />
                </CSSTransition>)}
                </TransitionGroup>
        </div>
    )
}

export default PostList;

type PropsType = {
    posts: Array<PostType>
    title: string

}
type DispatchType = {
    remove: (id: number) => void
}