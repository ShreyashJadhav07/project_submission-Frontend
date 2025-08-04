// import axios from "axios"

// export const ENDPOINT={
//     login:"/auth/login",
//     signup:"/auth/signup",
//     logout:"/auth/logout",
//     createPost: "/posts",
//     getAllPosts: "/posts",
//      getUserPosts: (userId) => `/posts/user/${userId}`,


// }
// export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export const api=axios.create({
//     baseURL:API_BASE_URL,
//     withCredentials:true,
// })

import axios from "axios"

export const ENDPOINT = {
    login: "/auth/login",
    signup: "/auth/signup",
    logout: "/auth/logout",
    createPost: "/posts",
    getAllPosts: "/posts",
    getUserPosts: (userId) => `/posts/user/${userId}`,
}

// Fix the API base URL with fallback
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3010/api";

console.log("API_BASE_URL:", API_BASE_URL); // Debug log

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // This sends cookies
    headers: {
        'Content-Type': 'application/json',
    }
});

// Add request interceptor for debugging
api.interceptors.request.use(
    (config) => {
        console.log("=== API REQUEST DEBUG ===");
        console.log("URL:", config.baseURL + config.url);
        console.log("Method:", config.method);
        console.log("Data:", config.data);
        console.log("Headers:", config.headers);
        console.log("========================");
        return config;
    },
    (error) => {
        console.error("Request error:", error);
        return Promise.reject(error);
    }
);

// Add response interceptor for debugging
api.interceptors.response.use(
    (response) => {
        console.log("=== API RESPONSE DEBUG ===");
        console.log("Status:", response.status);
        console.log("Data:", response.data);
        console.log("==========================");
        return response;
    },
    (error) => {
        console.error("Response error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);