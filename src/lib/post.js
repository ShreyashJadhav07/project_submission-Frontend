// import { api, ENDPOINT } from "./api";



// export async function createPost(postData){
//     const res=await api.post(ENDPOINT.createPost,postData);
//     return res.data;

// }
// export async function getAllPosts() {
//   const res = await api.post(ENDPOINT.getAllPosts);
//   return res.data;
// }

// export async function getUserPosts(userId) {
//   const res = await api.get(ENDPOINT.getUserPosts(userId));
//   return res.data;
// }

import { api, ENDPOINT } from "./api";

export async function createPost(postData) {
    console.log("Creating post with data:", postData); // Debug log
    
    const res = await api.post(ENDPOINT.createPost, postData);
    return res.data;
}

export async function getAllPosts() {
    console.log("Fetching all posts..."); // Debug log
    
    // FIXED: Changed from POST to GET
    const res = await api.get(ENDPOINT.getAllPosts);
    return res.data;
}

export async function getUserPosts(userId) {
    console.log("Fetching posts for user:", userId); // Debug log
    
    const res = await api.get(ENDPOINT.getUserPosts(userId));
    return res.data;
}