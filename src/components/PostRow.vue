<script setup>
import { defineProps } from 'vue';
defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <tr>
    <td></td>
    <td>{{post.title}}</td>
    <td>{{post.body}}</td>
  </tr>
</template>

<style scoped>

</style>