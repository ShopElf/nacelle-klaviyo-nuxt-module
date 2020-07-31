import { mount } from '@vue/test-utils'
import KlaviyoEmbedForm from './KlaviyoEmbedForm.vue'

const wrapper = mount(KlaviyoEmbedForm, {
  propsData: {
    embedCode: 'prop-embed-code'
  },
  mocks: {
    $nacelle: {
      klaviyo: {
        defaultEmbedCode: 'embed-code'
      }
    }
  }
})

describe('ReviewsWidget', () => {
  it('should mount', () => {
    const component = wrapper.find('.klaviyo-embed-form')
    expect(component).not.toBeUndefined()
  })
})
