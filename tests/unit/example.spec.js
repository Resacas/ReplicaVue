import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import Data from '@/data/data.json'


// describe('M.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })


test('renders id param', () => {
  const wrapper = shallowMount(NavBar, {
    mocks: {
      $route: {
        params: {
          route: '/'
        }
      }
    }
  })
  expect(wrapper.text()).toContain('PRODUCTS')
})
test('renders id param', () => {
  const wrapper = shallowMount(NavBar, {
    mocks: {
      $route: {
        params: {
          route: '/'
        }
      }
    }
  })
  expect(typeof wrapper.text()).toBe('string')
})
