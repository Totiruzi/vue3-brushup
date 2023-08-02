import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import AppSongItem from '@/components/AppSongItem.vue'
import { describe, expect, test } from 'vitest'
describe('snapshot AppSongItem.vue', () => {
  test('renders correctly', () => {
    const song = {
      docID: 'xyz',
      modified_name: 'bar',
      display_name: 'bar',
      comment_count: 7
    }

    const wrapper = shallowMount(AppSongItem, {
      props: { song },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
