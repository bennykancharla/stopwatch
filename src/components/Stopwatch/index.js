// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    this.onResetTimer()
  }

  startingTime = () => {
    this.setState(prev => ({
      seconds: prev.seconds + 1,
    }))
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.startingTime, 1000)
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
  }

  onResetTimer = () => {
    this.onStopTimer()
    this.setState({seconds: 0})
  }

  getTimer = () => {
    const {seconds} = this.state
    const initialMinutes = Math.floor(seconds / 60)
    const initialSeconds = seconds % 60
    const finalMinutes =
      initialMinutes < 10 ? `0${initialMinutes}` : initialMinutes

    const finalSeconds =
      initialSeconds < 10 ? `0${initialSeconds}` : initialSeconds
    return `${finalMinutes}:${finalSeconds}`
  }

  render() {
    return (
      <div className="main-bg">
        <h1>Stopwatch</h1>
        <div className="timer-card-container">
          <div className="timer-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>{this.getTimer()}</h1>
          <div className="button-container">
            <button type="button" className="start" onClick={this.onStartTimer}>
              Start
            </button>
            <button type="button" className="stop" onClick={this.onStopTimer}>
              Stop
            </button>
            <button type="button" className="reset" onClick={this.onResetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
