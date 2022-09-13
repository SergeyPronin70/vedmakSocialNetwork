import axios from 'axios';
import { PhotosType, ProfileType, UserType } from '../types/types';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "87938376-06b4-4508-88ff-0beab877ae74"
    }
})

const jsonPlaceHolderInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersAPI = {
    getUsers(page = 1, pageSize = 10, term: string ='', friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${page}&count=${pageSize}&term=${term}`+(friend===null ? '' : `&friend=${friend}`))
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
    },
}
export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, { status: status }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`profile`, profile ).then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<ResponseType<SavePhotosResponseType>>(`profile/photo`, formData, { headers: {
            'Content-Type': 'multipart/form-data'
        } }).then(res => res.data)
    },
    getPosts(limit = 10, page = 1) {
       return jsonPlaceHolderInstance.get('posts', {
        params: {
            _limit: limit,
            _page: page,
        }
       }) 
    },
    getPostById(id: string | undefined) {
        if (id) {
            return jsonPlaceHolderInstance.get(`posts/${id}`)
        }
    },
    getPostCommentsById(id: number) {
       return jsonPlaceHolderInstance.get(`posts/${id}/comments`)
    },
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login (email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<ResponseType<LoginResponseDataType, ResultCodesEnum & ResultCodesForCaptcha>>
        (`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data)
    },
    
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number 
    error: string | null
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
type SavePhotosResponseType = {
    photos: PhotosType
}

type MeResponseDataType = {
id: number, 
email: string, 
login: string
}
type LoginResponseDataType = {
   userId: number
}
type GetCaptchaUrlResponseType = {
    url: string
}
