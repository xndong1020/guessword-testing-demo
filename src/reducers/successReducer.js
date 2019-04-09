import actionTypes from '../actions/actionTypes'

const initState = false

/**
 * @function successReducer
 * @param {boolean} state - Current success state
 * @param {object} state - action to be reduced
 * @returns {boolean} - New success state
 */
const successReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true
    default:
      return state
  }
}

export default successReducer
