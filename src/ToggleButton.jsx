import { useState } from "react"

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(true);
    const buttonHandle = () =>{
        setIsOn(!isOn);
    }
    return (
        <>
        <p>The button is: {isOn ? 'ON' : 'OFF'}</p>
        <button onClick={buttonHandle}>Turn {isOn ? 'OFF' : 'ON'}</button>
        </>
    )
}

export default ToggleButton;