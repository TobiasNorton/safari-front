import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animals: [],
      animalsSeenInJungle: [],
      deletedAnimals: [],
      totalTimesAnimalsSeen: 0
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:4567/animals').then(response => {
      console.log(response.data.count_of_times_seen)
      this.setState({
        animals: response.data
      })
    })

    axios.get('http://localhost:4567/animals/Jungle').then(response => {
      this.setState({
        animalsSeenInJungle: response.data
      })
    })

    // axios.delete('/animals/Desert').then(response => {
    //   console.log(response.data)
    //   this.setState({
    //     deletedAnimals: response.data
    //   })
    // })
  }

  // sumOfTimesAnimalsSeen = () => {
  //   let timesAnimalsSeen = this.state.animals.map(animalObject => {
  //     return animalObject.count_of_times_seen
  //   })
  //   return timesAnimalsSeen.reduce((a, b) => a + b)
  // }

  render() {
    return (
      <div>
        <section className="main">
          <h1>Your Safari Vacation</h1>
          <h3>I hear you've had some adventures recently!</h3>

          <p>
            I know you're jet-lagged and lacking sleep, so let me refresh your memory about all the
            wildlife you've seen. For starters, here is a list of every animal you saw:
          </p>
          <ul>
            {this.state.animals.map((animalObject, index) => {
              return <li key={index}>{animalObject.species}</li>
            })}
          </ul>
          <p>These are all the animals you've seen in the jungle alone!</p>
          {this.state.animalsSeenInJungle.map((animalObject, index) => {
            return <li key={index}>{animalObject.species}</li>
          })}
          <p>
            The desert was your least favorite part, so let's forget about it. Take a look at the
            animals we're deleting from your brain for one last time (and then look at this bright
            red light).
          </p>
          {this.state.deletedAnimals.map((animalObject, index) => {
            return <li key={index}>{animalObject.species}</li>
          })}
          <p>This is the total number of animals you've seen!</p>
          {this.state.totalTimesAnimalsSeen}
          <p>This is the total number of occurences you've seen of just lions, tigers and bears.</p>
        </section>
      </div>
    )
  }
}

export default App
