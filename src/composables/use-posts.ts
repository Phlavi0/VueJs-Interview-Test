import type {post} from "./user-types";
import {ref, onMounted} from 'vue';
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const posts = ref<post[]>([]);
export function usePost(userId:string){
    onMounted(async () => {
        try {
            const response = await fetch(API_URL + "?userId=" + userId)
            const data = await response.json();
            posts.value = data;
            console.log("seed: "+data.info);
        } catch (error) {
            console.error(error)
        }
    });
    return {posts}
}
