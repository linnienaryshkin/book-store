import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

// TODO: Models should specified separably, usually with a special library like io-ts or zod
export type Book = {
  title: string
  author: string
}

export type City = string

export const useBooksStore = defineStore('booksStore', () => {
  const cities: Ref<City[]> = ref([
    'san jose',
    'santiago',
    'san francisco',
    'santa rosa',
    'san juan',
    'sabadell',
    'salamanca',
    'salt lake city',
    'salinas',
    'salem',
    'sausalito',
    'taipei',
    'tel aviv',
    'tempe',
    'termez',
    'temuco',
    'tiajuna',
    'tieling',
    'thousand oaks',
    'thunder bay',
    'tokyo',
    'tulsa'
  ])

  const books: Ref<Book[]> = ref([
    {
      title: 'Don Quixote',
      author: 'Miguel De Cervantes'
    },
    {
      title: "Pilgrim's Progress",
      author: 'John Bunyan'
    },
    {
      title: 'Robinson Crusoe',
      author: 'Daniel Defoe'
    },
    {
      title: "Gulliver's Travels",
      author: 'Jonathan Swift'
    },
    {
      title: 'Tom Jones',
      author: 'Henry Fielding'
    },
    {
      title: 'Clarissa',
      author: 'Samuel Richardson'
    },
    {
      title: 'Tristram Shandy',
      author: 'Laurence Sterne'
    }
  ])

  function searchEntities(dataset: 'city' | 'book', query: string) {
    const data = dataset === 'city' ? cities.value : books.value

    if (query.length < 3) {
      return data
    }

    return data.filter((entity) => {
      // TODO: Ideally, that should be two separate stores, one for cities and one for books. So that we won't need such TS hacks.
      const item = dataset === 'city' ? (entity as string) : (entity as Book).title
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }

  return { cities, books, searchEntities }
})
