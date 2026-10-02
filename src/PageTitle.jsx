import { useEffect, useState } from "react";

const PageTitle = ()=>{

    const [name,setName] = useState("");
    const [greeting,setGreeting] = useState("Hello");

    useEffect(()=>{
        name === "" ? document.title = "Welcome!" : document.title = greeting +', '+ name;
    },[name])
    return (
        <div>
            <h2>Enter Your Name:</h2>
            <input 
                type="text"
                value={name} 
                onChange={(e)=> setName(e.target.value)}
            />
            <h2>Choose a Greeting:</h2>
            <input 
                type="text" 
                value={greeting}
                onChange={(e)=> setGreeting(e.target.value)}
            />
        </div>
    )
}

export default PageTitle;