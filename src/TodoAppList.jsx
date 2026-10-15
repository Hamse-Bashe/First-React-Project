import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import TodoListItem from './TodoListItem';

const TodoAppList = () => {

    const {state} = useContext(TodoContext);
  return (
    <ul>
        {
            state.map((todo)=>(
                <TodoListItem key={todo.id} todo={todo}/>
            ))
        }
    </ul>
  )
}

export default TodoAppList