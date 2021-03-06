import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"


function App(){
  const jokeComponents = jokesData.map( joke =>  <Joke id={joke.id} key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  return  (
    <div>
      {jokeComponents}
    </div>
  )

}

export default App;