import React from 'react';
import s from './MyPosts.module.css';
import { Field, InjectedFormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, reqired } from '../../../utils/validators/validators';
import { CreateField, GetStringKeys, Textarea } from '../../common/FormsControls/FormsControls';
import MySelect from '../../common/MySelect';
import { useState } from 'react';
import { useMemo } from 'react';
import MyModal from './MyModal';
import './Transition.module.css'
import PostList from './Post/PostList';
import MyButton from '../../common/MyButton';
import MyInput from '../../common/MyInput';
import { useEffect } from 'react';
import { Loader } from '../../common/preloader/Loader';
import Paginator from '../../common/Paginator/Paginator';
import { useRef } from 'react';
import { useObserver } from '../../common/hooks/useObserver';
import { PhotosType, PostType, ProfileType } from 'src/types/types';

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [modal, setModal] = useState(false);
  const lastElement = useRef();
  const observer = useRef();
 
  const onPageChanged = (page: number) => {
    props.setCurrentPage(page);
    props.getPostList(props.pageSize, page)
  }

  useEffect(() => {
    props.getPostList(props.pageSize, props.currentPage);
  }, [props.currentPage, props.pageSize])

useObserver(lastElement, props.currentPage < 11, props.isFetching, () => {props.setCurrentPage(props.currentPage+1)})

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
    props.sortPostsActionCreator(sort)
  }

  let onAddPost = (values: AddPostValuesType) => {
    props.addPostActionCreator(values.newPostText, values.newTitle);
    setModal(false);
  }

  let sortedAndSearchedPosts = useMemo(() => {
    return [...props.posts].filter(post => post.body.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, selectedSort, props.posts])

  return (
    <div className={s.postsBlock}>
      <h3>My posts </h3>

      <div>
        <MyButton onClick={() => setModal(true)}> Create new post </MyButton>
        <MyModal visible={modal} setVisible={setModal} >
          <AddNewPostRedux
            onSubmit={onAddPost}
            newPostText={props.newPostText}
            newTitle={props.newTitle} />
        </MyModal>
        <div>
          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue='Sorting'
            options={[
              { value: 'body', name: 'By message' },
              { value: 'title', name: 'By title' }]}
          />
        </div>
        <div style={{ width: '200px', margin: '15px' }}>
          <MyInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='Search...' />
        </div>
      </div>

     <MySelect 
     value={props.pageSize}
     onChange={(value: number) => props.setPageSize(value)}
     defaultValue="Count of posts on page"
     options={[
      {value: 5, name: '5'},
      {value: 10, name: '10'},
      {value: 25, name: '25'},
      {value: -1, name: 'All'},
     ]} />

      <PostList posts={sortedAndSearchedPosts} remove={props.deletePost} />
      <div ref={ lastElement } style={{ height: '20px' }} />
      {props.isFetching &&
        <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
      }
      <div className={s.page__wrapper}>
        <Paginator currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={props.totalPostCount}
            pageSize={props.pageSize}  />
      </div>

    </div>
  )
}

const maxLength100 = maxLengthCreator(100);

const AddNewPost: React.FC<InjectedFormProps<AddPostValuesType, AddPostPropsType> & AddPostPropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      { CreateField<AddPostValuesTypeKeys>('Post title', 'newTitle', Textarea, [reqired, maxLength100]) }
        </div>
      <div>
      { CreateField<AddPostValuesTypeKeys>('Post message', 'newPostText', Textarea, [reqired, maxLength100]) }
      </div>
      <div>
        <MyButton>Add post</MyButton>
      </div>
    </form>
  )
}
const AddNewPostRedux = reduxForm<AddPostValuesType, AddPostPropsType>({ form: 'ProfileAddNewPostForm' })(AddNewPost)

//const MyPostsMemo = React.memo(MyPosts)
export default MyPosts;

type AddPostPropsType = {

}
type AddPostValuesType = {
  newTitle: string
  newPostText: string
}

export type AddPostValuesTypeKeys = GetStringKeys<AddPostValuesType>

export type MapPropsType ={
  posts: Array<PostType>
  currentPage: number
  pageSize: number
  isFetching: boolean
  newPostText: string
  totalPostCount: number
  newTitle: string
  }
  export type DispatchPropsType ={
  addPostActionCreator: (newPostText: string, newTitle: string) => void
  setCurrentPage: (page: number) => void
  getPostList: (pageSize: number, page: number) => void
  sortPostsActionCreator: (sort: string) => void
  setPageSize: (value: number) => void
  deletePost: (postId: number) => void
  searchPost: (search: string) => void
  setUserProfile: (profile: ProfileType) => void
  setStatus: (status: string) => void
  savePhotoSuccess: (photos: PhotosType) => void
  setPosts: (posts: Array<PostType>, totalPostCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  }









// const searchPost = (search) => { заготовка для использования в редьюсере
//   setSearchQuery(search);
//   props.searchPost(search)
// }

// let postsElements = sortedAndSearchedPosts
//   .map(p => 
//   <CSSTransition key={p.id} timeout={500} className="post" >
//   <Post
//     id={p.id}
//     message={p.message}
//     likesCount={p.likesCount}
//     incrementLikesCount={props.incrementLikesCount}
//     decrementLikesCount={props.decrementLikesCount}
//     profile={props.profile}
//     deletePost={props.deletePost} />
//     </CSSTransition>)


{/* {sortedAndSearchedPosts.length
        ?
        <div className={s.posts}>
         <TransitionGroup component={null} >
          {postsElements}
          </TransitionGroup>
        </div>
        : <b>Posts not found...</b>} */}