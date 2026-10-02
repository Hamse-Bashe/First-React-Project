import { useEffect, useState } from "react";

const MouseTracker = ()=> {
    const[mouseTrack, setMouseTrack] = useState({x:0, y:0})

    useEffect(()=>{
        const handleMouseTrack = (e)=> {
            setMouseTrack({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseTrack)

        // clean up
        return()=>{
            window.removeEventListener('mousemove', handleMouseTrack)
        }
    })
    return (
        <div>
            <p>Mouse X: {mouseTrack.x}px</p>
            <p>Mouse Y: {mouseTrack.y}px</p>
        </div>
    )
}

export default MouseTracker;