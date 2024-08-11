import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BookSearch from '@/views/BookSearch.vue'

import { createPinia } from 'pinia'

describe('BookSearch', () => {
  it('should render full data table', async () => {
    const wrapper = mount(BookSearch, { global: { plugins: [createPinia()] } })
    expect(wrapper.find('input')).toBeDefined()
    expect(wrapper.findAll('tr')).toHaveLength(8) // +1 for the header row
  })

  it('should filter expected number of books by title', async () => {
    const wrapper = mount(BookSearch, { global: { plugins: [createPinia()] } })

    // Simulate user input
    const input = wrapper.find('input')
    await input.setValue('Don')

    const rows = wrapper.findAll('tr')
    expect(rows).toHaveLength(2) // +1 for the header row
    expect(rows[1].text()).toContain('Don QuixoteMiguel De Cervantes')
  })
})
