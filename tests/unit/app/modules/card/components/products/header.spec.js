import { shallowMount } from '@vue/test-utils'
import ProductsButton from '../../../../../../../src/app/modules/card/components/products/Header.vue'

jest.mock('vue-router', () => ({
  useRoute: jest.fn(() => ({
    params: {
      name: 'kevin-aron-tapia-cruz',
      sucursal: 'sur'
    }
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}))
describe('Header for product view', () => {
  test('should have arrow left icon', () => {
    const wrapper = shallowMount(ProductsButton)
    const backButton = wrapper.find('.bi-arrow-left')
    expect(backButton).toBeDefined()
  })

  test('should have stories icon', () => {
    const wrapper = shallowMount(ProductsButton)
    const backButton = wrapper.find('.bi-file-image')
    expect(backButton).toBeDefined()
  })

  test('should have catalogue icon', () => {
    const wrapper = shallowMount(ProductsButton)
    const button = wrapper.find('.bi-book-fill')
    expect(button).toBeDefined()
  })

  test('should change background depending on param sucursal', () => {
    const wrapper = shallowMount(ProductsButton)
    expect(wrapper.vm.backgroundSucursal).toEqual({ background: '#218d9b' })
  })

  test('should call goToMainPage when back button is clicked', async () => {
    const wrapper = shallowMount(ProductsButton)
    const spy = (wrapper.vm.goToMainView = jest.fn())
    await wrapper.get('button').trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
