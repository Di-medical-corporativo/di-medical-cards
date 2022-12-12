import { shallowMount } from '@vue/test-utils'
import ListProduct from '../../../../../../../src/app/modules/card/components/products/ListProducts.vue'

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
  dispatch: jest.fn().mockReturnValue(null),
  commit: jest.fn(),
  getters: ['']
}

jest.mock('vuex', () => ({
  useStore: () => mockStore
}))

describe('List product component', () => {
  beforeEach(() => jest.clearAllMocks())

  test('should match snapshot', () => {
    const wrapper = shallowMount(ListProduct)

    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should dispatch action when component is created', () => {
    shallowMount(ListProduct)
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
  })
})
