// check if router link could generate pages you want to redirect users to
import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import AppSongItem from '@/components/AppSongItem.vue'
import { describe, expect, test } from 'vitest'

describe('Router', () => {
  test('renders router link', () => {
    const song = {
      docID: 'xyz'
    }

    const wrapper = shallowMount(AppSongItem, {
      props: { song },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: 'song',
      params: { id: song.docID }
    })
  })
})
