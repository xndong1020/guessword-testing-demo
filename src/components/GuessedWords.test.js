import React from 'react'
import { shallow } from 'enzyme'
import GuessedWords from './GuessedWords'
import { findByTestAttr, checkProps } from '../../test/testUtils'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

/***
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param { object } props - Component props specific to this setup
 * @returns { ShallowWrapper }
 */
const setup = (props = {}) => {
  // override defaultProps with the props passed in
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<GuessedWords {...setupProps} />)
  return wrapper
}

test('does not throw warning with expected props', () => {
  const propError = checkProps(GuessedWords, defaultProps)
  expect(propError).toBeUndefined()
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('renders instructions to guess a word', () => {
    const div = findByTestAttr(wrapper, 'guess-instruction')
    expect(div.length).toBe(1)
    expect(div.text()).toContain('Try to guess the secret word!')
  })
})

describe('if there are words guessed', () => {
  let wrapper
  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5
    }
  ]

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })

  test('renders "guessed words" section', () => {
    // console.log(wrapper.debug())
    const container = findByTestAttr(wrapper, 'guessed-words-div')
    expect(container.length).toBe(1)
  })

  test('correct number of guess words', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-word-node')
    expect(guessedWordNode.length).toBe(guessedWords.length)
  })
})
