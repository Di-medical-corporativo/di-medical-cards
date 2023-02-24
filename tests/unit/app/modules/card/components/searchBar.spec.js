import { shallowMount } from '@vue/test-utils'
import SearchBar from '../../../../../../src/app/modules/card/components/SearchBar.vue'

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

describe('Search bar component', () => {
  test('should match snapshot', () => {
    const wrapper = shallowMount(SearchBar)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should call searchTechnicalSheetByCode when button is pushed', async () => {
    const wrapper = shallowMount(SearchBar)
    const button = wrapper.find('.search__bar__button')
    const spy = (wrapper.vm.searchTechnicalSheetByCode = jest.fn())
    await button.trigger('click')
    expect(spy).toHaveBeenCalled()
  })

  test('should emit value when input has a value and button is pushed', async () => {
    const wrapper = shallowMount(SearchBar)
    const button = wrapper.find('.search__bar__button')
    wrapper.find('.search__bar__input').setValue('hola')
    await button.trigger('click')
    expect(wrapper.emitted('codeToSearch')).toBeDefined()
  })

  test('should not emit anything when input has no value', async () => {
    const wrapper = shallowMount(SearchBar)
    const button = wrapper.find('.search__bar__button')
    await button.trigger('click')
    expect(wrapper.emitted('codeToSearch')).toBeUndefined()
  })
})
