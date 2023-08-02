// testing for child component in a component
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import AppSongItem from '@/components/AppSongItem.vue'

describe('HomeView', () => {
  test('render list of songs', () => {
    const songs = [{}, {}, {}]
    const component = shallowMount(HomeView, {
      data() {
        return {
          songs
        }
      },
      global: {
        mocks: {
          $t: (message) => message
        }
      }
    })

    const items = component.findAllComponents(AppSongItem)

    expect(items).toHaveLength(songs.length)

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i])
    })
  })
})
