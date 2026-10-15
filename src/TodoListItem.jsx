import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import styles from './todoApp.module.css'

const TodoListItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext);

  return (
    <li>
        <div>
            <input 
                type="checkbox" 
                onChange={()=> dispatch({type: "toggle", payload: todo.id})}
            />
            <span
                // style={{textDecoration: todo.comlpeted ? "line-through" : "none", cursor: "pointer"}}
                className = {todo.comlpeted && styles.ticked}
                
            >
                {todo.text}
            </span>
        </div>
        <button className={styles.deleteButton} onClick={()=> dispatch({type: "delete", payload: todo.id})}>Delete</button>
    </li>
  )
}

export default TodoListItem