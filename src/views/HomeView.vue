<script setup lang="ts">
import {ref, computed} from 'vue';
import { useUser } from "@/composables/use-users";
import router from "@/router";
import UserRow from "@/components/UserRow.vue";
const { users } = useUser();
const search = ref('');
const filteredUsers = computed(() => {
  return users.value.filter((user: any) => {
    return user.name.toLowerCase().includes(search.value.toLowerCase())
  })
})
function routerpush(uid:string){
  router.push({ name: "User", params: { id: uid } })
}
</script>

<template>
  <main>
        <input v-model="search" type="text" placeholder="Search by name...">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
          </thead>
          <tbody>
          <UserRow v-for="user in filteredUsers" :key="user.id" :user="user" @click="routerpush(user.id)" />
          </tbody>

        </table>
  </main>
</template>

<style scoped>
</style>
