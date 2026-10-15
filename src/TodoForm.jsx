import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext';
import styles from './todoApp.module.css'


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
    <div className={styles.todoForm}>
        <h2>Todo App</h2>
        <input 
            type="text"
            value={text}
            onChange={(e)=> setText(e.target.value)} 
            placeholder="Enter a New Todo"
        />
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoForm