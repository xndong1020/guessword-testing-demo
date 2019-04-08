import React from 'react'
import PropTypes from 'prop-types'
import './Congrats.scss'

const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats" className="congrats">
      {success && (
        <div data-test="congrats-message" className="congrats-message">
          Congrats! You have guessed the word!
        </div>
      )}
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats
