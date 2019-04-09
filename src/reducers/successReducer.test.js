import successReducer from './successReducer'
import actionTypes from '../actions/actionTypes'

describe('successReducer ', () => {
  test('should return default init state of `false` if no action', () => {
    // make successReducer use default init state
    const newState = successReducer(undefined, {})
    expect(newState).toEqual(false)
  })

  test('should return state of `true` if "CORRECT_GUESS" action received', () => {
    const action = { type: actionTypes.CORRECT_GUESS }
    // make successReducer use default init state, and 'CORRECT_GUESS' action
    const newState = successReducer(undefined, action)
    expect(newState).toEqual(true)
  })
})
