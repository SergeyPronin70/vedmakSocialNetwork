import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  
let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)
  
  return (
    <div className={s.postsBlock}>
      <h3>My posts </h3>
      <div>
        <div>
        <textarea ref={newPostElement}
                  onChange={onPostChange}
                  value={props.newPostText}/>
        </div>
        <div>
        <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}

      </div>
    </div>
  )
}

export default MyPosts;