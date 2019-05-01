import React from "react"

// function App () {
//   return (
//     <div>
//       <h1>Code goes here </h1>
//     </div>
//   )
// }

class App extends React.Component{
  getDate(){
    return new Date()
  }

  render (){
    
    return (
      <div>
        <h1>Code goes here at {this.getDate().toString()}</h1>
      </div>
     )
  }
}

export default App