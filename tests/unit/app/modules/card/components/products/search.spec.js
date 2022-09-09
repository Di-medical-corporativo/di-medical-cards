import { shallowMount } from '@vue/test-utils'
import Search from '../../../../../../../src/app/modules/card/components/products/Search.vue'
describe('Search input for products view', () => {
  test('should emit input when user type on the search field', async () => {
    const wrapper = shallowMount(Search)
    const input = wrapper.find('.products__search--input')
    input.setValue('hola')
    await wrapper.vm.$nextTick()
    const emmitted = wrapper.emitted('input')
    expect(emmitted[0]).toEqual(['hola'])
  })
})
