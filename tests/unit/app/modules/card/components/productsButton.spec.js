import { shallowMount } from '@vue/test-utils'
import ProductsButton from '../../../../../../src/app/modules/card/components/ProductsButton.vue'

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}))

describe('Products button to catalogue', () => {
  test('should match snapshot', () => {
    const wrapper = shallowMount(ProductsButton, {
      propsData: {
        sucursal: 'sur'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should change color background depending on sucursal, sur case', () => {
    const wrapper = shallowMount(ProductsButton, {
      propsData: {
        sucursal: 'sur'
      }
    })
    expect(wrapper.vm.buttonBackground.background).toBe('#218d9b')
  })

  test('should change color background depending on sucursal, corporativo case', () => {
    const wrapper = shallowMount(ProductsButton, {
      propsData: {
        sucursal: 'corporativo'
      }
    })
    expect(wrapper.vm.buttonBackground.background).toBe('#c28400')
  })

  test('should have cart icon', () => {
    const wrapper = shallowMount(ProductsButton, {
      propsData: {
        sucursal: 'corporativo'
      }
    })
    const icon = wrapper.get('i')
    const iconName = 'bi bi-cart-fill icon'
    expect(icon.attributes('class')).toBe(iconName)
  })

  test('should call goToProducts when the button is clicked', async () => {
    const wrapper = shallowMount(ProductsButton, {
      propsData: {
        sucursal: 'corporativo'
      }
    })
    const spy = (wrapper.vm.goToProducts = jest.fn())
    await wrapper.get('button').trigger('click')
    expect(spy).toHaveBeenCalled()
  })
})
