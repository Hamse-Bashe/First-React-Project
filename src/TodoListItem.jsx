import React, { useContext } from 'react'
import TodoContext from './TodoContext'

const TodoListItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext);

  return (
    <li className='flex justify-between m-4 items-center'>
        <div className='space-x-2'>
            <input 
                type="checkbox" 
                onChange={()=> dispatch({type: "toggle", payload: todo.id})}
            />
            <span
                className = {todo.comlpeted ? "line-through text-gray-400" : ""}
                
            >
                {todo.text}
            </span>
        </div>
        <button className='text-red-500' onClick={()=> dispatch({type: "delete", payload: todo.id})}>Delete</button>
    </li>
  )
}

export default TodoListItem