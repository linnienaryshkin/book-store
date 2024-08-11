<script setup lang="ts">
import { useBooksStore } from '@/stores/booksStore'
import { computed, onMounted, ref } from 'vue'

const booksStore = useBooksStore()

const citySearch = ref('')
// Computed values are cached and only re-evaluated when their dependencies change
const citySearchOptions = computed(() => {
  return booksStore.cities.filter((city) => city.toLowerCase().includes(citySearch.value.toLowerCase()))
})

const searchInput = ref(null)

onMounted(() => {
  searchInput.value.focus()
})
</script>

<template>
  <div class="wrapper">
    <input v-model="citySearch" placeholder="Search for cities" class="searchInput" ref="searchInput" />

    <table class="searchResult" border="1">
      <tr>
        <th>Cities Search Result</th>
      </tr>
      <tr v-for="city in citySearchOptions" :key="city">
        <td>{{ city }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.searchInput{
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.searchResult{
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
}
</style>
