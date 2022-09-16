import { shallowMount } from '@vue/test-utils'
import Product from '../../../../../../../src/app/modules/card/components/products/Product.vue'

jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}))

describe('Search input for products view', () => {
  test('should cut title string when its length is greater than 40 characters', async () => {
    const wrapper = shallowMount(Product, {
      props: {
        product: {
          title: 'Antifaz para fototerapia con correa pediátrico',
          brand: 'Brand',
          description: 'description'
        },
        sucursal: 'sur',
        stock: true
      }
    })

    const shortenTitle = wrapper.vm.shortenTitle
    expect(shortenTitle.includes('...')).toBe(true)
  })

  test('should cut description when its length is greater than 120 characters', () => {
    const wrapper = shallowMount(Product, {
      props: {
        product: {
          title: 'Antifaz para fototerapia con correa pediátrico',
          description: 'Antifaz para fototerapia con correa pediátrico color verde, el modelo diseñado para un paciente macrosómico. En Di medical corporativo contamos también con: Antifaz para fototerapia con correa pretérmino color gris, Antifaz para fototerapia con correa termino color azul',
          photos: ['.jpg', '.jpg', '.mp4'],
          brand: 'Brand',
          stock: true
        },
        sucursal: 'sur'
      }
    })

    const shortenDesc = wrapper.vm.shortenDesc
    expect(shortenDesc.includes('...')).toBe(true)
  })

  test('should change cta background depending on sucursal, sur case', () => {
    const wrapper = shallowMount(Product, {
      props: {
        product: {
          title: 'Antifaz para fototerapia con correa pediátrico',
          description: 'Antifaz para fototerapia con correa pediátrico color verde, el modelo diseñado para un paciente macrosómico. En Di medical corporativo contamos también con: Antifaz para fototerapia con correa pretérmino color gris, Antifaz para fototerapia con correa termino color azul',
          photos: ['.jpg', '.jpg', '.mp4'],
          brand: 'Brand',
          stock: true
        },
        sucursal: 'sur'
      }
    })

    const backgroundButton = wrapper.vm.backgroundButton
    expect(backgroundButton).toEqual({ background: '#218d9b' })
  })

  test('should change cta background depending on sucursal, corporativo case', () => {
    const wrapper = shallowMount(Product, {
      props: {
        product: {
          title: 'Antifaz para fototerapia con correa pediátrico',
          description: 'Antifaz para fototerapia con correa pediátrico color verde, el modelo diseñado para un paciente macrosómico. En Di medical corporativo contamos también con: Antifaz para fototerapia con correa pretérmino color gris, Antifaz para fototerapia con correa termino color azul',
          photos: ['.jpg', '.jpg', '.mp4'],
          brand: 'Brand',
          stock: true
        },
        sucursal: 'corporativo'
      }
    })

    const backgroundButton = wrapper.vm.backgroundButton
    expect(backgroundButton).toEqual({ background: '#c28400' })
  })

  test('should change icon and text depending on stock, On stock case', () => {
    const wrapper = shallowMount(Product, {
      props: {
        product: {
          title: 'Antifaz para fototerapia con correa pediátrico',
          description: 'Antifaz para fototerapia con correa pediátrico color verde, el modelo diseñado para un paciente macrosómico. En Di medical corporativo contamos también con: Antifaz para fototerapia con correa pretérmino color gris, Antifaz para fototerapia con correa termino color azul',
          photos: ['.jpg', '.jpg', '.mp4'],
          brand: 'Brand',
          stock: true
        },
        sucursal: 'corporativo'
      }
    })

    const stockIcon = wrapper.vm.stockIcon
    expect(stockIcon).toEqual({ icon: 'bi bi-check2 stock', text: 'En stock' })
  })

  test('should change icon and text depending on stock, out of stock case', () => {
    const wrapper = shallowMount(Product, {
      props: {
        product: {
          title: 'Antifaz para fototerapia con correa pediátrico',
          description: 'Antifaz para fototerapia con correa pediátrico color verde, el modelo diseñado para un paciente macrosómico. En Di medical corporativo contamos también con: Antifaz para fototerapia con correa pretérmino color gris, Antifaz para fototerapia con correa termino color azul',
          photos: ['.jpg', '.jpg', '.mp4'],
          brand: 'Brand',
          stock: false
        },
        sucursal: 'corporativo'
      }
    })

    const stockIcon = wrapper.vm.stockIcon
    expect(stockIcon).toEqual({ icon: 'bi bi-x out-stock', text: 'Agotado' })
  })
})
