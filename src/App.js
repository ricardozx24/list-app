import React from "react"
import Greeting from "./Components/Greeting"
import ImportanceOfState from "./Components/ImportanceOfState"
import Counter from "./Components/Counter"
import GoingOut from "./Components/GoingOut"
import AddItem from "./Components/AddItem"
import ContactCard from "./Components/ContactCard"
import Messages from "./Components/Messages"





function App() {
    

  return (
    <div>      
        <AddItem />
            <hr />    
        <Greeting />
            <hr />
        <ImportanceOfState />
            <hr />
        <Counter />
            <hr />
        <GoingOut />
            <hr />
        <ContactCard />
            <hr />
        <Messages />
            <hr />
    </div>
  );
}

export default App;
