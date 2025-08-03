import axios from "axios"

export const ENDPOINT={
    login:"/auth/login",
    signup:"/auth/signup",
    logout:"/auth/logout",
    createPost: "/posts",
    getAllPosts: "/posts",
     getUserPosts: (userId) => `/posts/user/${userId}`,


}
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api=axios.create({
    baseURL:API_BASE_URL,
    withCredentials:true,
})