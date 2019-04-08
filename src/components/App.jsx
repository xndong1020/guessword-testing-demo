import React, { Component } from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import './App.scss'

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

class App extends Component {
  render() {
    return (
      <div data-test="">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    )
  }
}

export default App
