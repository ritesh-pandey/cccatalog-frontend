import HeaderSection from '~/components/HeaderSection'
import render from '../../test-utils/render'

describe('HeaderSection', () => {
  it('should render correct contents', () => {
    const wrapper = render(HeaderSection, {
      mocks: {
        $route: {
          path: '',
        },
      },
    })

    expect(wrapper.find('header').vm).toBeDefined()
  })
})
