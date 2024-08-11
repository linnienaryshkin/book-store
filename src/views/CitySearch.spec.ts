import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Component from './CitySearch.vue'

describe('CitySearch', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})