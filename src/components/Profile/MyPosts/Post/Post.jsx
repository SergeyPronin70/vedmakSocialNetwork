import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://cs4.pikabu.ru/post_img/big/2015/05/22/6/1432282614_1753581065.jpg' />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>

  )
}

export default Post;