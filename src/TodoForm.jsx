import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext';


const TodoForm = () => {

const [text, setText] = useState('');
const {dispatch} = useContext(TodoContext)

    const handleAdd = ()=>{
        if(text.trim()){
            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            }

            dispatch({type: "add", payload: newTodo});
            setText('');
        }
    }

  return (
    <div className='text-center'>
        <h2 className='font-bold text-2xl'>Todo App</h2>
        <div className='space-x-4 mt-2'>
            <input 
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)} 
                placeholder="Enter a New Todo"
                className='p-2 rounded border border-gray-400'
            />
            <button onClick={handleAdd} className='bg-indigo-600 py-2 px-4 text-white rounded' >Add</button>
        </div>
    </div>
  )
}

export default TodoForm