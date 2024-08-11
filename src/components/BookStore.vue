<script setup lang="ts">
import { useBooksStore } from '@/stores/booksStore'

const booksStore = useBooksStore()

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

    <br />
    <br />

    <ol>
      <li v-for="book in booksStore.books" :key="book.title">
        {{ book.title }} | {{ book.author }}
      </li>
    </ol>

    <br />

    <ol>
      <li v-for="city in booksStore.cities" :key="city">
        {{ city }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
.wrapper {
  color: red;
}
</style>
