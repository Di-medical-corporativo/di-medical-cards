import { shallowMount } from '@vue/test-utils'
import TechnicalSheet from '../../../../../../../src/app/modules/card/components/technicalSheets/ModalTechnical.vue'

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

describe('Technical sheet modal component', () => {
  test('should match snapshot', () => {
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        imageToOpen: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should display image from props property', () => {
    const imageProps = 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        imageToOpen: imageProps
      }
    })
    const image = wrapper.find('.card-technicals__modal__background__image')
    expect(image.attributes('src')).toBe(imageProps)
  })

  test('should emit closeModal event when the user clicks the close button', () => {
    const imageProps = 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        imageToOpen: imageProps
      }
    })
    const buttonToClose = wrapper.find('.card-technicals__modal__background__close')
    buttonToClose.trigger('click')
    expect(wrapper.emitted('closeModal')).toBeDefined()
  })

  test('should emit closeModal event when the user clicks surrounding area of image', () => {
    const imageProps = 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        imageToOpen: imageProps
      }
    })
    const buttonToClose = wrapper.find('.card-technicals__modal__background')
    buttonToClose.trigger('click')
    expect(wrapper.emitted('closeModal')).toBeDefined()
  })
})
