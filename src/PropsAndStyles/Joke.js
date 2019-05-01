import React from "react"

function Joke(props){
  console.log(props)
  return (
    <div>
      <h1 style={{display: !props.question && "none"}}>Question#{props.id}: {props.question}</h1>
      <h3 style={{color: !props.question && "#888888"}}>Answer#{props.id}: {props.punchLine} </h3>
      <hr/>
    </div>
  )
}

export default Joke;