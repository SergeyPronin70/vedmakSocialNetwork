import { FormAction, stopSubmit } from "redux-form";
import { profileAPI, ResultCodesEnum } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType, BaseThunkType, InferActionTypes } from "./redux-store";

let initialState = {
    posts: [
        //старая структура данных для работы со 'счетчиком лайков'
        // { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        // { id: 2, message: 'It\'s my first post!', likesCount: 3 },
        // { id: 3, message: 'react', likesCount: 5 }

        //новая структура данных для работы с сервером json...
        { id: 1, title: 'Hi', body: 'hi!!!' },
        { id: 2, title: 'Hi', body: 'hi!!!' },
        { id: 3, title: 'Hi', body: 'hi!!!' },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    pageSize: 10,
    totalPostCount: 0,
    currentPage: 1,
    isFetching: false,
    newPostText: '',
    newTitle: '',
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                //для счетчика
                // id: Date.now(),
                // message: action.newPostText,
                // likesCount: 0
                //для сервака
                id: Date.now(),
                title: action.newTitle,
                body: action.newPostText,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
                newTitle: '',
            };
        }

        case 'SET_POSTS': {
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                totalPostCount: action.totalPostCount,
            }
        }

        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage }
    
        case 'TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }

        case 'SORT_POSTS': {
            let sortedPosts = state.posts.sort((a, b) => String(a[action.sort]).localeCompare(String(b[action.sort])));
            return {
                ...state,
                posts: sortedPosts
            }
        }

        case 'SET_PAGE_SIZE': {
            return {
                ...state,
                pageSize: action.pageSize,
            }
        }

        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            };

        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }

        case 'DELETE_POST': {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case 'SAVE_PHOTO_SUCCESS': {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }
        default:
            return state;
    }

}

export const actions = {
    addPostActionCreator: (newPostText: string, newTitle: string) => ({ type: 'ADD_POST', newPostText, newTitle } as const),
    sortPostsActionCreator: (sort: string) => ({ type: 'SORT_POSTS', sort } as const),
    searchPost: (search: string) => ({ type: 'SEARCH_POST', search } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
    setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'DELETE_POST', postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const),
    setPosts: (posts: Array<PostType>, totalPostCount: number)  => ({ type: 'SET_POSTS', posts, totalPostCount } as const),
    setPageSize: (pageSize: number) => ({ type: 'SET_PAGE_SIZE', pageSize } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
}

export const getPostList = (pageSize: number, page: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    let response = await profileAPI.getPosts(pageSize, page)
    const totalCountOfPost = response.headers['x-total-count'];
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setPosts(response.data, totalCountOfPost));
    //dispatch(setTotalPostCount(totalCountOfPost));
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data))
};

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
};
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState: GetStateType) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        if (userId != null) {
        dispatch(getUserProfile(userId))
        } else {
            throw new Error('userId cant be null')
        }
    } else {
        dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
        //{ "contacts": {"facebook": response.data.messages[0]} })) можно распарсить сообщение об ошибке и сделать для каждого конкретного поля
        return Promise.reject(data.messages[0]);
    }
};


export default profileReducer;

export type InitialStateType = typeof initialState
type GetStateType = () => AppStateType
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
type ActionsTypes = InferActionTypes<typeof actions>




// case SEARCH_POST: {
        //     return {
        //         ...state,
        //         posts: state.posts.filter(post => post.message.toLowerCase().includes(action.search.toLowerCase())) } }
        // case INCREMENT_LIKES_COUNT: {
        //     let incLcikes = (state.posts.find(p => p.id == action.postId)?.likesCount ?? 0) + 1;
        //     return {
        //         ...state,
        //         posts: updateObjectInArray(state.posts, action.postId, 'id', { likesCount: incLcikes }) }}
        // case DECREMENT_LIKES_COUNT: {
        //     let decLikes = state.posts.find(p => p.id == action.postId)?.likesCount;
        //     return {
        //         ...state,
        //         posts: updateObjectInArray(state.posts, action.postId, 'id', { likesCount: decLikes - 1 }) }}
        //case SET_TOTAL_POST_COUNT:
        //     return { ...state, totalPostCount: action.count }

        //export const incrementLikesCount = (postId) => ({ type: INCREMENT_LIKES_COUNT, postId });
//export const decrementLikesCount = (postId) => ({ type: DECREMENT_LIKES_COUNT, postId });
//export const setTotalPostCount = (totalPostCount) => ({ type: SET_TOTAL_POST_COUNT, count: totalPostCount });