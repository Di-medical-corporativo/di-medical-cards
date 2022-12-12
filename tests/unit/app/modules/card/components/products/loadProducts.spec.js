import { shallowMount } from '@vue/test-utils'
import LoadProducts from '../../../../../../../src/app/modules/card/components/products/LoadProducts.vue'
import { products } from '../../../../../mock-data/testProduts'

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  })),
  useRoute: jest.fn(() => ({
    params: {
      sucursal: 'sur'
    }
  }))
}))

const mockStore = {
  dispatch: jest.fn().mockReturnValue(products),
  commit: jest.fn(),
  getters: ['']
}

jest.mock('vuex', () => ({
  useStore: () => mockStore
}))

describe('Load product component', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should match snapshot', () => {
    const wrapper = shallowMount(LoadProducts)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should dispatch action when button is clicked', async () => {
    const wrapper = shallowMount(LoadProducts)
    await wrapper.find('.products__load__button').trigger('click')
    expect(mockStore.dispatch).toHaveBeenCalled()
  })
})
