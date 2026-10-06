import { useReducer } from "react";

const DoubleCounter = ()=>{
    const initialState = {
        counterA: 0,
        counterB: 0,
    }

    const reducer = (state, action)=>{
        switch(action.type){
            case "incrementA":
                return {...state,counterA : state.counterA +1}
            case "decrementA":
                return {...state,counterA : state.counterA -1}
            case "incrementB":
                return {...state,counterB : state.counterB +1}
            case "decrementB":
                return {...state,counterB : state.counterB -1}
            case "resetAll":
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>Double Counter</h2>
            <h3>Counter A: {state.counterA}</h3>
            <button onClick={()=> dispatch({type: "incrementA"})}>+A</button>
            <button onClick={()=> dispatch({type: "decrementA"})} disabled={state.counterA === 0}>-A</button>
            <h3>Counter B: {state.counterB}</h3>
            <button onClick={()=> dispatch({type: "incrementB"})}>+B</button>
            <button onClick={()=> dispatch({type: "decrementB"})} disabled={state.counterB === 0}>-B</button>
        </div>
    )
}

export default DoubleCounter;