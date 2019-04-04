import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  state = {
    counter: 0
  }

  handleIncrement = () => {
    this.setState(prevState => {
      let { counter, error } = prevState
      // clear error if error is not empty
      const newState = error
        ? {
            counter: counter + 1,
            error: ''
          }
        : { counter: counter + 1 }
      return newState
    })
  }

  handleDecrement = () => {
    this.setState(prevState => {
      let { counter, error } = prevState
      if (counter - 1 >= 0) {
        return {
          counter: counter - 1
        }
      }
      // if you reach here, the counter value must be 0
      if (!error) {
        return {
          error: `the counter can't go below zero`
        }
      }
    })
  }

  render() {
    const { counter, error } = this.state
    return (
      <div data-test="component-app">
        <div data-test="counter-display">Counter current is: {counter}</div>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          increment
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          decrement
        </button>
        {error && <div data-test="error-display">{error}</div>}
      </div>
    )
  }
}

export default App
