import React from 'React'
import { shallow } from 'enzyme'
import Input from './Input'
import { findByTestAttr, checkProps, storeFactory } from '../../test/testUtils'

/**
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props - init props from parent and redux
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}, props = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} {...props} />)
    .dive()
    .dive()
  return wrapper
}

describe('render', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup()
  })
  describe('words has not been guessed', () => {
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-Input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })

  describe('words has been guessed', () => {
    let wrapper

    beforeEach(() => {
      const initState = { success: true }
      wrapper = setup(initState)
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-Input')
      expect(component.length).toBe(1)
    })
    test('DOES NOT renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })
    test('DOES NOT renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})
