import { useEffect, useState } from "react";

const CountdownTimer = ()=>{

    const [firstTime, setFirstTime] = useState(30);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(()=>{
        let timer;
        if(isRunning){
            timer = setInterval(()=>{
                setTimeLeft((prev)=> prev > 0 ? prev - 1 : prev)
            },1000)
        }

        return ()=>{
            clearInterval(timer)
        }
    },[isRunning])

    const handleTimeInput = (e)=>{
        const timeValue = e.target.value;
        setFirstTime(timeValue);
        setTimeLeft(timeValue);
    }

    const handleStart = ()=>{
        if(timeLeft > 0){
            setIsRunning(true);
        }
    }
    const handleStop = ()=>{
        setIsRunning(false);
    }
    const handleReset = ()=>{
        setIsRunning(false);
        setTimeLeft(firstTime)
    }

    return (
        <div>
            <h1>Countdown Timer</h1>
            <label>Set Time (seconds): </label>
            <input 
                type="number"
                min={0}
                value={firstTime}
                onChange={handleTimeInput}
            />
            <p>Time left: {timeLeft} seconds</p>
            <button onClick={handleStart} disabled={isRunning || timeLeft <= 0} >Start</button>
            <button disabled={!isRunning} onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CountdownTimer;