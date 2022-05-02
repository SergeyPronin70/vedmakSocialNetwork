import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fba12e46-f90a-4d1f-89c2-afe0e2a573c4"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
      return instance.get(`profile/${userId}`)
        .then(response => {
          console.log(response);
          return response;
        })
    }
}

export const authAPI = {
   me() {
    return instance.get(`auth/me`)
   }
}
