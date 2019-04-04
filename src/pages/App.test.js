import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

/***
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param { object } props - Component props specific to this setup
 * @param { any } state - Initial state for setup
 * @returns { ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

/***
 * Return ShallowWrapper container nodes(s) with the given data-test value
 * @function setup
 * @param { ShallowWrapper } wrapper - enzyme shallow wrapper to search within
 * @param { string } val - Value of data-test attribute fo search
 * @returns { ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter start at 0', () => {
  const wrapper = setup()
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
})

test('clicking button increments counter display', () => {
  // Step 01: set counter state
  const wrapper = setup(null, {
    counter: 7
  })
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(7)

  // Step 02: find the button
  const button = findByTestAttr(wrapper, 'increment-button')

  // Step 03. simulation button click event
  button.simulate('click')

  // Step 04. Forces a re-render.
  // Useful to run before checking the render output if something external
  // may be updating the state of the component somewhere.
  wrapper.update()

  // Step 05:  find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  // Step 06. expect text contains 8, it should be something like: "Counter current is: 8"
  expect(counterDisplay.text()).toContain('8')
})

test('renders decrement button, and decrements counter display', () => {
  // Step 01: setup wrapper, with initial counter value
  const wrapper = setup(null, {
    counter: 8
  })
  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(8)
  // Step 02: find the button
  const button = findByTestAttr(wrapper, 'decrement-button')

  // step03: simulate button click
  button.simulate('click')

  wrapper.update()

  // step04: find counter display
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  // step05. it should has correct value
  expect(counterDisplay.text()).toContain('7')
})

test(`click decrement button, if counter can't be decremented if counter is 0, 
and display and error message`, () => {
  // Step 01: setup wrapper, with initial counter value and error value
  const wrapper = setup(null, {
    counter: 0,
    error: ''
  })

  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
  const initialErrorState = wrapper.state('error')
  expect(initialErrorState).toBe('')

  // Step 02: find the button
  const button = findByTestAttr(wrapper, 'decrement-button')

  // step03: simulate button click
  button.simulate('click')

  wrapper.update()

  // step04: find counter display
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  // step05. it should has correct value
  expect(counterDisplay.text()).toContain('0')

  // step 06. find error display
  const errorDisplay = findByTestAttr(wrapper, 'error-display')

  // step07. it should has correct value
  expect(errorDisplay.text()).toContain(`the counter can't go below zero`)
})

test(`error should clear on click of increment button, counter should be increment as usual`, () => {
  // Step 01: setup wrapper, with initial counter value and error value
  const wrapper = setup(null, {
    counter: 0,
    error: `the counter can't go below zero`
  })

  const initialCounterState = wrapper.state('counter')
  expect(initialCounterState).toBe(0)
  const initialErrorState = wrapper.state('error')
  expect(initialErrorState).toContain(`the counter can't go below zero`)

  // Step 02: find increment button
  const button = findByTestAttr(wrapper, 'increment-button')

  // Step 03: simulate button click
  button.simulate('click')

  // force update
  wrapper.update()

  // Step 04: find counter display
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')

  // Step 05: verify counter works
  expect(counterDisplay.text()).toContain('1')

  // Step 06: find error display
  const errorDisplay = findByTestAttr(wrapper, 'error-display')

  // Step 07: verify the error message is clear
  expect(errorDisplay.length).toBe(0)
})
