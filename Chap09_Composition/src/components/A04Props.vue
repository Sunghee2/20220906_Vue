<template>
  <h3>A04 Props Component</h3>

  <div>
    Name: {{name}}<br>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['name'])
</script>
