import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, text: 'Subscribe'}

  subscribePage = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      this.setState({
        isSubscribed: true,
        text: 'Unsubscribe',
      })
    } else {
      this.setState({
        isSubscribed: false,
        text: 'Subscribe',
      })
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" onClick={this.subscribePage}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
