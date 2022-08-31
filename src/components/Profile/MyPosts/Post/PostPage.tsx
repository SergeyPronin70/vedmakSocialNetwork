import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMatch } from 'react-router-dom'
import { PostType } from "src/types/types";
import { profileAPI } from "../../../../api/api";
import { useFetching } from "../../../common/hooks/useFetching";
import { Loader } from "../../../common/preloader/Loader";

const PostPage: React.FC<PropsType> = (props) => {
    const params = useMatch('/profile/posts/:id')
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await profileAPI.getPostById(params.params.id);
        setPost(response.data)
    })
    const [fetchPostCommentsById, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await profileAPI.getPostCommentsById(params.params.id);
        setComments(response.data)
    })


    useEffect(() => {
        fetchPostById()
        fetchPostCommentsById()
    }, [])

    return <div>
        
        {isLoading
            ?
            <Loader />
            :
            <div> <h1> {post.id}. {post.title} </h1> </div>
        }
        <h2>
            Comments
            </h2>
            {isCommentsLoading
            ? <Loader />
        : <div style={{paddingLeft: '30px'}}>
            {comments.map(comm => 
               <div>
                <h5> {comm.email} </h5>
                <div> {comm.body} </div>
               </div> )}
        </div> }
        
    </div>
}

export default PostPage;

type PropsType = {
    post: PostType
    comments: Array<{email: string, body: string}>
}
