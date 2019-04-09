import React from 'react'
import { connect } from 'react-redux'
import { correctGuess } from '../actions'

const Input = props => {
  const { success } = props
  return (
    <div data-test="component-Input">
      {!success && (
        <>
          <input type="text" data-test="input-box" />
          <button data-test="submit-button">Submit</button>
        </>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    success: state.success
  }
}

const mapDispatchToProps = {
  correctGuess
}

export default connect(mapStateToProps)(Input)
