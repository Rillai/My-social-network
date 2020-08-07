import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "0faceebc-92bd-4d18-9c0a-a4671feb71bb"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data; });
    },
    getProfile(userId) {
        debugger
        return instance.get(`profile/` + userId);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data; });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data; });
    },
}
export const authAPI = {
    me() { return instance.get(`auth/me`) }
}
