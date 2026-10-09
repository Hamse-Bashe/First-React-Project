import LanguageContext from "./LanguageContext";
import LanguageComponent from "./LanguageComponent";
import { useState } from "react";

function App(){

  const [greeting, setGreeting] = useState("Hello!")

  const translate = ()=>{
    setGreeting((prev)=> (prev === "Hello!" ? "Hola!" : "Hello!"))
  }

  return(
    <LanguageContext.Provider value={greeting}>
      <button onClick={translate}>
        Switch to {greeting === "Hello!" ? "Spanish" : "English"}
      </button>
      <LanguageComponent/>
    </LanguageContext.Provider>
  )
}

export default App;