<script setup>
import { usePost } from "@/composables/use-posts";
import { useRoute } from 'vue-router'
import PostRow from "@/components/PostRow.vue";
const route = useRoute()
const { posts } = usePost(route.params.id.toString());

</script>
<template>
  <table>
    <thead>
    <tr>
      <th>{{route.params.id}}</th>
      <th>Title</th>
      <th>Body </th>
    </tr>
    </thead>
    <tbody>
    <PostRow v-for="post in posts" :key="post.id" :post="post"/>
    </tbody>

  </table>
</template>

<style>

</style>
