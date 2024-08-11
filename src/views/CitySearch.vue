<script setup lang="ts">
import { useBooksStore, type City } from '@/stores/booksStore'
import { computed, onMounted, ref } from 'vue'

const booksStore = useBooksStore()

const citySearch = ref('')
// Computed values are cached and only re-evaluated when their dependencies change
const citySearchOptions = computed(
  () => booksStore.searchEntities('city', citySearch.value) as City[]
)

const searchInput = ref(null)
onMounted(() => {
  // @ts-ignore | I haven't found a way to make typescript happy with this
  searchInput.value.focus()
})
</script>

<template>
  <main>
    <!-- TODO: Consider separating these input + table with a component, so that we don't duplicate code -->
    <input
      v-model="citySearch"
      placeholder="Search for cities (min 3 symbols)"
      class="searchInput"
      ref="searchInput"
    />

    <table class="searchResult" border="1">
      <tr>
        <th>City</th>
      </tr>
      <tr v-for="city in citySearchOptions" :key="city">
        <td>{{ city }}</td>
      </tr>
      <tr v-if="citySearchOptions.length === 0">
        <td>No results found</td>
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
