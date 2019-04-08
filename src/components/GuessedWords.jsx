import React from 'react'
import './GuessedWords.scss'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 ? (
        <div data-test="guess-instruction">Try to guess the secret word!</div>
      ) : (
        <div data-test="guessed-words-div" className="guessedWords">
          {guessedWords.map((item, idx) => {
            return (
              <div key={idx} data-test="guessed-word-node">
                <span className="word">{item.guessedWord}</span>
                <span className="count">{item.letterMatchCount}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords
