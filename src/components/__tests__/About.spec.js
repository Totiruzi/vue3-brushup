import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import About from '@/views/AboutView.vue'

describe('About.vue', () => {
  test('render inner text', () => {
    const wrapper = mount(About, {
      shallow: true,
    })
    expect(wrapper.text()).toContain('about')
  })
})
