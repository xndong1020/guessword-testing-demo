import React from 'react'
import { shallow } from 'enzyme'
import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../../test/testUtils'

const defaultProps = { success: false }

/***
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param { object } props - Component props specific to this setup
 * @returns { ShallowWrapper }
 */
const setup = (props = {}) => {
  // override defaultProps with the props passed in
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<Congrats {...setupProps} />)
  return wrapper
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test(`renders no text when 'success' prop is false`, () => {
  const wrapper = setup({ success: false })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.length).toBe(0)
})

test(`renders non-empty congrats message when 'success' prop is true`, () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
  // checkPropTypes with check the component's propTypes, with the propTypes provided
  // if no error, will return undefined
  // otherwise return error
  const propError = checkProps(Congrats,{ success: true })
  expect(propError).toBeUndefined()
})

test('will throw warning with unexpected props', () => {
  // checkPropTypes with check the component's propTypes, with the propTypes provided
  // if no error, will return undefined
  // otherwise return error
  const propError = checkProps(Congrats,{ success: "wrong propTypes" })
  expect(propError.length).not.toBe(0)
})
