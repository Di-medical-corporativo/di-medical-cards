import { createStore } from 'vuex'
import dependencies from '../../../../src/config/dependencies'
import initCardModule from '../../../../src/app/modules/card/store'

describe('Card store', () => {
  const createVuexStore = (initialState) => {
    return createStore({
      modules: {
        card: {
          ...initCardModule(dependencies),
          state: { ...initialState }
        }
      }
    })
  }

  describe('state', () => {
    test('should have inital state', () => {
      const store = createVuexStore({ employee: null })
      expect(store.state.card.employee).toBe(null)
    })
  })

  describe('mutations', () => {
    test('setEmployee, should set the employee to state', () => {
      const testEmployee = {
        firstName: 'Test subject',
        lastName: 'García Flores',
        description1: 'Junior en Senior en las marcas Salter Labs, ResMed, Longfian y  Fisher & Paykel',
        description2: 'Especialista en almacenaje, dirección y coordinación de los productos de material de curación.',
        image: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/cards%2FCarlos%20Omar%2FCarlos%20Omar-image.jpg?alt=media&token=1d041e52-b07d-4e81-83e2-1431a7c365fa',
        job: 'Jefe de Almacén ',
        phone: '5580494313',
        sucursal: 'dm-sur'
      }
      const store = createVuexStore({ employee: null })
      store.commit('card/setEmployee', testEmployee)
      expect(store.state.card.employee).toEqual(testEmployee)
    })
  })

  describe('actions', () => {
    test('getEmployeeById, should get the employee', async () => {
      const testEmployee = {
        firstName: 'Test subject',
        lastName: 'García Flores',
        description1: 'Junior en Senior en las marcas Salter Labs, ResMed, Longfian y  Fisher & Paykel',
        description2: 'Especialista en almacenaje, dirección y coordinación de los productos de material de curación.',
        image: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/cards%2FCarlos%20Omar%2FCarlos%20Omar-image.jpg?alt=media&token=1d041e52-b07d-4e81-83e2-1431a7c365fa',
        job: 'Jefe de Almacén ',
        phone: '5580494313',
        sucursal: 'dm-sur',
        email: 'almacen@dimedicaldelsur.mx'
      }
      const store = createVuexStore({ employee: null })
      await store.dispatch('card/getEmployeeById', '0W2w0TFoyn3AbUf10hYn')
      expect(store.state.card.employee).toEqual(testEmployee)
    })

    test('getProducts, should get all products', async () => {
      const store = createVuexStore({
        employee: null,
        products: null,
        isLoading: false,
        lastDate: null
      })

      await store.dispatch('card/getAllProducts')
      expect(store.state.card.products.length).toBe(5)
    })

    test('should get products after lastDate', async () => {
      const store = createVuexStore({
        employee: null,
        products: null,
        isLoading: false,
        lastDate: null
      })

      await store.dispatch('card/getAllProducts')
      expect(store.state.card.products.length).toBe(5)
      await store.dispatch('card/getAllProducts')
      console.log(store.state.card.products.length)
    })
  })
})
