<script setup lang="ts">
import { useBooksStore } from '@/stores/booksStore'
import { computed, onMounted, ref } from 'vue'

const booksStore = useBooksStore()

const bookSearch = ref('')
// Computed values are cached and only re-evaluated when their dependencies change
const bookSearchOptions = computed(() => {
  if (bookSearch.value.length < 3) {
    return booksStore.books
  }
  return booksStore.books.filter((book) =>
    book.title.toLowerCase().includes(bookSearch.value.toLowerCase())
  )
})

const searchInput = ref(null)

onMounted(() => {
  // @ts-ignore | I haven't found a way to make typescript happy with this
  searchInput.value.focus()
})
</script>

<template>
  <main>
    <input
      v-model="bookSearch"
      placeholder="Search for books, by title (min 3 symbols)"
      class="searchInput"
      ref="searchInput"
    />

    <table class="searchResult" border="1">
      <tr>
        <th>Book Title</th>
        <th>Book Author</th>
      </tr>
      <tr v-for="book in bookSearchOptions" :key="book.title">
        <td>{{ book.title }}</td>
        <td>{{ book.author }}</td>
      </tr>
      <tr v-if="bookSearchOptions.length === 0">
        <td colspan="2">No results found</td>
      </tr>
    </table>
  </main>
</template>

<style scoped>
.searchInput {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.searchResult {
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
}
</style>
