<script setup lang="ts">
const message = 'Hello Vue 3 + Vite'

function greet(event: Event) {
  if (event) {
    alert(event.target)
  }
}
</script>

<template>
  <div class="wrapper">
    <p>Message is: {{ message }}</p>
    <input @input="greet" placeholder="edit me" />
  </div>
</template>

<style scoped>
.wrapper {
  color: red;
}
</style>
