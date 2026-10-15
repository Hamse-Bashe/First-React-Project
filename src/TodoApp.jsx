import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducere';
import TodoAppList from './TodoAppList'
import TodoForm from './TodoForm';
import styles from './todoApp.module.css'

const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.todoStyle}>
      <TodoContext.Provider value={{state, dispatch}}>
          <TodoForm/>
          <TodoAppList/>
      </TodoContext.Provider>
    </div>
  )
}

export default TodoApp