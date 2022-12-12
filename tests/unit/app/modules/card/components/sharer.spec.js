import { shallowMount } from '@vue/test-utils'
import Sharer from '../../../../../../src/app/modules/card/components/Sharer.vue'

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    params: {
      id: 'kevin-aron-tapia-cruz',
      sucursal: 'sur'
    }
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}))

describe('Sharer component', () => {
  beforeEach(() => {
    let clipboardData = '' // initalizing clipboard data so it can be used in testing
    const mockClipboard = {
      writeText: jest.fn(
        (data) => { clipboardData = data }
      ),
      readText: jest.fn(
        () => { return clipboardData }
      )
    }
    global.navigator.clipboard = mockClipboard
    global.alert = jest.fn()
  })

  test('should match snapshot', () => {
    const wrapper = shallowMount(Sharer, {
      propsData: {
        sucursal: 'sur'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should change background button depending on sucursal param', () => {
    const wrapper = shallowMount(Sharer, {
      propsData: {
        sucursal: 'sur'
      }
    })

    const colorBackground = wrapper.vm.sucursalColor('color')
    expect(colorBackground.color).toBe('#218d9b')
  })

  test('should return object for background when sucursalColor is given background parameter', () => {
    const wrapper = shallowMount(Sharer, {
      propsData: {
        sucursal: 'sur'
      }
    })

    const colorBackground = wrapper.vm.sucursalColor('background')
    expect(colorBackground).toEqual({ background: '#218d9b' })
  })

  test('should copy to clipboard link', () => {
    const wrapper = shallowMount(Sharer, {
      propsData: {
        sucursal: 'sur'
      }
    })
    const copyToClipBoardButton = wrapper.findAll('.icon')[3]
    copyToClipBoardButton.trigger('click')
    expect(global.navigator.clipboard.writeText).toHaveBeenCalled()
  })

  test('should call alert method', async () => {
    const wrapper = shallowMount(Sharer, {
      propsData: {
        sucursal: 'sur'
      }
    })
    const copyToClipBoardButton = wrapper.findAll('.icon')[3]
    await copyToClipBoardButton.trigger('click')
    expect(global.alert).toHaveBeenCalled()
  })
})
