import React, { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducere';
import TodoAppList from './TodoAppList'
import TodoForm from './TodoForm';

const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='shadow-[0_25px_25px_rgba(0,0,0,0.15)] w-96 p-6 mt-6 mx-auto rounded'>
      <TodoContext.Provider value={{state, dispatch}}>
          <TodoForm/>
          <TodoAppList/>
      </TodoContext.Provider>
    </div>
  )
}

export default TodoApp