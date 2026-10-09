import LanguageContext from "./LanguageContext"
import { useContext } from "react"

const LanguageComponent = () => {

    const greeting = useContext(LanguageContext);

  return (
    <div>
        <h1>{greeting}</h1>
    </div>
  )
}

export default LanguageComponent;