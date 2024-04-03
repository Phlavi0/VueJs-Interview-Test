import type {user} from "./user-types";
import { ref, onMounted } from 'vue';
const API_URL = 'https://jsonplaceholder.typicode.com/users'
const params = new URLSearchParams({ results: '4'})
const users = ref<user[]>([]);
export function useUser(){
    onMounted(async () => {
        try {
            const response = await fetch(API_URL)
            const data = await response.json();
            users.value = data;
            console.log("seed: "+data.info);
        } catch (error) {
            console.error(error)
        }
    });
    return {users, params}
}

