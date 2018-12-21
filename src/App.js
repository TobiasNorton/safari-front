import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animals: [],
      animalsTwo: [],
      animalsSeenInJungle: [],
      deletedAnimals: [],
      timesAnimalsSeen: '',
      lionsTigersBearsCount: ''
    }
  }

  allAnimals = () => {
    axios.get('http://localhost:4567/animals').then(response => {
      this.setState({
        animals: response.data
      })
    })
  }

  // Calculating the total count of times seen on the front end
  allAnimalsTwo = () => {
    axios.get('http://localhost:4567/animals').then(response => {
      this.setState(
        {
          animalsTwo: response.data
        },
        () => {
          let timesSeen = this.state.animalsTwo.map((animalObject, index) => {
            return animalObject.count_of_times_seen
          })
          let totalTimes = timesSeen.reduce((a, b) => {
            return a + b
          })
          this.setState({
            timesAnimalsSeen: totalTimes
          })
        }
      )
    })
  }

  showAnimals = () => {
    return this.state.animals.map((animalObject, index) => {
      return (
        <p key={index} className="list">
          {animalObject.species}
        </p>
      )
    })
  }

  jungleAnimals = () => {
    axios.get('http://localhost:4567/animals/Jungle').then(response => {
      this.setState({
        animalsSeenInJungle: response.data
      })
    })
  }

  showJungleAnimals = () => {
    return this.state.animalsSeenInJungle.map((animalObject, index) => {
      return (
        <p key={index} className="list">
          {animalObject.species}
        </p>
      )
    })
  }

  showAnimals = () => {
    return this.state.animals.map((animalObject, index) => {
      return (
        <p key={index} className="list">
          {animalObject.species}
        </p>
      )
    })
  }

  // Created a new route on the back end

  lionsTigersBears = () => {
    axios.get('http://localhost:4567/animals/count/lionstigersbears').then(response => {
      this.setState({
        lionsTigersBearsCount: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <section className="main">
          <h1>Your Safari Vacation</h1>
          <h3>I hear you've had some adventures recently!</h3>

          <p>
            I know you're jet-lagged and lacking sleep, so let me refresh your memory about all the
            wildlife you've seen. For starters, click this button to see is a list of every animal
            you saw:
          </p>
          <button onClick={this.allAnimals}>Click here</button>
          {this.showAnimals()}
          <p>These are all the animals you've seen in the jungle alone!</p>
          <button onClick={this.jungleAnimals}>Click here</button>
          {this.showJungleAnimals()}
          <p>
            The desert was your least favorite part, so let's forget about it. Take a look at the
            animals we're deleting from your brain for one last time (and then look at this bright
            red light).
          </p>
          <button>Click Here</button>
          {this.state.deletedAnimals.map((animalObject, index) => {
            return (
              <p key={index} className="list">
                {animalObject.species}
              </p>
            )
          })}
          <p>This is the total number of animals you've seen!</p>
          <button onClick={this.allAnimalsTwo}>Click Here</button>
          <p className="list">{this.state.timesAnimalsSeen}</p>
          <p>This is the total number of occurences you've seen of just lions, tigers and bears.</p>
          <button onClick={this.lionsTigersBears}>Click Here</button>
          <p className="list">{this.state.lionsTigersBearsCount}</p>
        </section>
      </div>
    )
  }
}

export default App
