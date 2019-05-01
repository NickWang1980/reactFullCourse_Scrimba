import React from "react"
import ContactCard from "./ContactCard"

function App(){
  return (
    <div className="contacts">
      <ContactCard 
          contact={{name: "name1", imgUrl:"https://pic.sgcn.com/attachments/forum/201811/15/112747qozdloohhhat6z6o.jpeg", phone:"213", email: "a@b.com"}}
      />          
      <ContactCard 
          contact={{name: "name21", imgUrl:"https://pic.sgcn.com/attachments/forum/201811/15/112747qozdloohhhat6z6o.jpeg", phone:"213", email: "a@b.com"}}
      />              <ContactCard 
          contact={{name: "name31", imgUrl:"https://pic.sgcn.com/attachments/forum/201811/15/112747qozdloohhhat6z6o.jpeg", phone:"213", email: "a@b.com"}}
      />              <ContactCard 
          contact={{name: "name41", imgUrl:"https://pic.sgcn.com/attachments/forum/201811/15/112747qozdloohhhat6z6o.jpeg", phone:"213", email: "a@b.com"}}
      />        
    </div>
  )
}

export default App