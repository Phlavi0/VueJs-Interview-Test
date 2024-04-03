<template>
  <tr>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.address.city}}</td>
    <td>{{user.company.name}}</td>
  </tr>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>