import { createStore } from 'vuex'
import dependencies from '../../../../src/config/dependencies'
import initCardModule from '../../../../src/app/modules/card/store'
import { products } from '../../mock-data/testProduts'

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

    test('setProducts, should set products when is the first petition ', async () => {
      const store = createVuexStore({
        employee: null,
        products: null,
        isLoading: false,
        lastDate: null
      })

      store.commit('card/setProducts', products)
      expect(store.state.card.products.length).toBe(9)
    })

    test('setProducts, should add products to state when there are already products', () => {
      const store = createVuexStore({
        employee: null,
        products: null,
        isLoading: false,
        lastDate: null
      })

      store.commit('card/setProducts', products)
      store.commit('card/setProducts', {
        '-NIISMobwZMZDJYelaZl': {
          brand: 'Sunmed',
          code: 'AF1140MB, AF2140MB, AF3140MB',
          date: 1669994991891,
          description: 'Bolsa de reanimación/ventilación de un solo paciente disponible en cinco tamaños/volúmenes\nDisponible con o sin manómetro de presión integrado\nEl manómetro de presión integrado con código de colores promueve eficazmente la administración de presión adecuada (<20 cm H2O); los campos tricolores alertan sobre el nivel de riesgo de la presión administrada\nEl suministro preciso de presión ayuda a reducir la insuflación gástrica, evitando así la aspiración de vómitos y la consiguiente neumonía\nMáscara facial de tamaño proporcional al tamaño de la bolsa de reanimación\n',
          imagesId: 'a622c98a-f3f9-4d6c-ad71-e45549ab5ad0',
          photos: [
            'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2Fa622c98a-f3f9-4d6c-ad71-e45549ab5ad0%2Fad0b6929-64d9-4efa-90e5-436301169654-product.jpg?alt=media&token=7604f397-732d-43c1-9264-d3c9063af33c',
            'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2Fa622c98a-f3f9-4d6c-ad71-e45549ab5ad0%2Ff1789135-337c-48e5-8d76-3678a87bdd6a-product.jpg?alt=media&token=a99a5460-09dc-4eb4-b5f9-1c6672d68cfb',
            'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2Fa622c98a-f3f9-4d6c-ad71-e45549ab5ad0%2Fff90661b-50a4-4a4b-9358-cb8ed8c54507-product.jpg?alt=media&token=456dba05-cd73-46b8-b1e0-42653723e3bb',
            'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2Fa622c98a-f3f9-4d6c-ad71-e45549ab5ad0%2Fb1d585d1-7c23-48c1-af7b-ed490f74c0e8-product.jpg?alt=media&token=daffec6f-29df-42e9-9d03-6cd819c5e409'
          ],
          specifications: [
            'LOS RESUCITADORES MANUALES AIRFLOW SE PUEDEN PERSONALIZAR\nSeleccione entre una variedad de componentes para montar una bolsa de reanimación personalizada que satisfaga las necesidades únicas de su paciente; consulte la pestaña COMPONENTES más abajo. Elija entre diferentes depósitos de oxígeno, cuello flexible, manómetro de presión integrado, máscaras faciales, válvula Pop-Off, filtro B/V, válvula PEEP e indicador de CO2'
          ],
          stock: true,
          title: 'Resucitador desechable adulto, pediátrico, neonatal con mascarilla, filtro y manómetro.',
          updatedAt: 1670024515775
        }
      })

      expect(store.state.card.products.length).toBe(10)
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
      expect(store.state.card.products.length).toBe(9)
    })

    test('getTechnicalSheets, should getFirst 5', async () => {
      const store = createVuexStore({
        employee: null,
        products: null,
        isLoading: false,
        lastDate: null,
        lastDateTechnicalSheets: null,
        technicalSheets: null
      })

      await store.dispatch('card/getTechnicalSheets')

      expect(store.state.card.technicalSheets.length).toBe(5)
    })
  })
})
