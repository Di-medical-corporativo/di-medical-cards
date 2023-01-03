import { shallowMount } from '@vue/test-utils'
import Qrview from '../../../../../../src/app/modules/card/views/QRCodeView.vue'
import { surBase64, corpBase64 } from '../../../../../../src/app/modules/card/helpers/base64Logos'

jest.mock('vue-router')

describe('QRCodeView', () => {
  test('should match snapshot', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'sur', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should set current link depending on route params', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'sur', id: 1 } })
    const wrapper = shallowMount(Qrview)
    const link = 'https://card.dimedicalcorporativo.mx/sur/1'
    expect(wrapper.vm.currentLink).toBe(link)
  })

  test('should set dotsColor depending on sucursal route params, (Sur)', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'sur', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.vm.dotsColor).toBe('#218d9b')
  })

  test('should set dotsColor depending on sucursal route params, (Sur)', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'corporativo', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.vm.dotsColor).toBe('#c28400')
  })

  test('should set cornersColor depending on sucursal route params, (sur)', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'sur', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.vm.cornersCOlor).toBe('#187876')
  })

  test('should set cornersColor depending on sucursal route params, (corp)', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'corporativo', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.vm.cornersCOlor).toBe('#684700')
  })

  test('should return base 64 image depending on route params, (SUR)', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'sur', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.vm.base64Image).toBe(surBase64)
  })

  test('should return base 64 image depending on route params, (CORPORATIVO)', () => {
    require('vue-router').useRoute.mockReturnValueOnce({ params: { sucursal: 'corporativo', id: 1 } })
    const wrapper = shallowMount(Qrview)
    expect(wrapper.vm.base64Image).toBe(corpBase64)
  })

  test.todo('Test download image')
})
