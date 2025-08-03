import { api, ENDPOINT } from "./api";



export async function createPost(postData){
    const res=await api.post(ENDPOINT.createPost,postData);
    return res.data;

}
export async function getAllPosts() {
  const res = await api.post(ENDPOINT.getAllPosts);
  return res.data;
}

export async function getUserPosts(userId) {
  const res = await api.get(ENDPOINT.getUserPosts(userId));
  return res.data;
}