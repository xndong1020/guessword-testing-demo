import { correctGuess } from './index'
import actionTypes from './actionTypes'

describe(`correctGuess`, () => {
  test(`returns an action with Type "CORRECT_GUESS"`, () => {
    const result = correctGuess()
    expect(result).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})
