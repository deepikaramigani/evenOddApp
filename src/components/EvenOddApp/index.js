import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, message: 'Count is Even'}

  onIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
    const {count} = this.state
    console.log(count)
    if (count === 0) {
      this.setState(() => ({message: 'Count is Even'}))
    } else if ((count + randomNumber) % 2 === 1) {
      this.setState(() => ({message: 'Count is Odd'}))
    } else if ((count + randomNumber) % 2 !== 1) {
      this.setState(() => ({message: 'Count is Even'}))
    }
  }

  render() {
    const {count, message} = this.state
    return (
      <div className="bg-container">
        <h1 className="counter-heading">Count {count}</h1>
        <p className="description">{message}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
