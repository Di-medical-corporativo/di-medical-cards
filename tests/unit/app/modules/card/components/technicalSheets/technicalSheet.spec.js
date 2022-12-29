import { shallowMount } from '@vue/test-utils'
import TechnicalSheet from '../../../../../../../src/app/modules/card/components/technicalSheets/TechnicalSheet.vue'

describe('Technical sheet component', () => {
  test('should match snapshot', () => {
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        image: 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('should display imaga from props property', () => {
    const imageProps = 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        image: imageProps
      }
    })
    const image = wrapper.find('.card-technicals__technicalSheet__image')
    expect(image.attributes('src')).toBe(imageProps)
  })

  test('should emit openModal event when user clicks on image', () => {
    const imageProps = 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        image: imageProps
      }
    })
    const image = wrapper.find('.card-technicals__technicalSheet__image')
    image.trigger('click')
    expect(wrapper.emitted('openModal')).toBeDefined()
  })

  test('should emit openModal event when user clicks on image and send props image', () => {
    const imageProps = 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/technicalSheets%2F3f0c89b3-c25e-4176-adc7-48fd69263b0c-technical.jpg?alt=media&token=0721fbd8-6891-4915-a084-e66108940c39'
    const wrapper = shallowMount(TechnicalSheet, {
      props: {
        image: imageProps
      }
    })
    const image = wrapper.find('.card-technicals__technicalSheet__image')
    image.trigger('click')
    const emittedImage = wrapper.emitted('openModal')[0][0]
    expect(emittedImage).toBe(imageProps)
  })
})
