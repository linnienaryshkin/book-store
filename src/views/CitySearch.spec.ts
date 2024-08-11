import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CitySearch from '@/views/CitySearch.vue'

import { createPinia } from 'pinia'

describe('CitySearch', () => {
  it('should render full data table', async () => {
    const wrapper = mount(CitySearch, { global: { plugins: [createPinia()] } })
    expect(wrapper.find('input')).toBeDefined()
    expect(wrapper.findAll('tr')).toHaveLength(23) // +1 for the header row
  })

  it('should filter expected number of cities', async () => {
    const wrapper = mount(CitySearch, { global: { plugins: [createPinia()] } })

    // Simulate user input
    const input = wrapper.find('input')
    await input.setValue('sant')

    const rows = wrapper.findAll('tr')
    expect(rows).toHaveLength(3) // +1 for the header row
    expect(rows[1].text()).toContain('santiago')
    expect(rows[2].text()).toContain('santa rosa')
  })
})
