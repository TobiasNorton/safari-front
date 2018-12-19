import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div>
        <section className="main">
          <h1>Your Safari Vacation</h1>
          <h3>I hear you've had some adventures recently!</h3>

          <p>
            I know you're jet-lagged and lacking sleep, so let me refresh your memory about all the
            wildlife you've seen.
          </p>

          <p>For starters, here is a list of every animal you saw:</p>

          <p>These are all the animals you've seen in the jungle alone!</p>

          <p>
            The desert was your least favorite part, so let's forget about it. Take a look at the
            animals we're deleting from your brain for one last time, and then look at this bright
            red light.
          </p>

          <p>This is the total number of animals you've seen!</p>

          <p>This is the total number of occurences you've seen of just lions, tigers and bears.</p>
        </section>
      </div>
    )
  }
}

export default App
