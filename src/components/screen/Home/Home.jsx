import React, { useState } from 'react';
import TodoItem from '../../item/TodoItem';
import CreateTodoField from '../../create-todo-field/CreateTodoField';
import FilterTodoItem from '../../item/FilterTodoItem';

const Home = () => {

const [todos, setTodos] = useState([]);

  const changeTodo = (id) => {
      const copy = [...todos];
      const current = copy.find(t => t.id === id);
      current.isCompleted = !current.isCompleted;
      setTodos(copy);
  }

  const removeTodo = (id) => {
      setTodos([...todos].filter(t => t.id !== id));
  }

  const changeTask = (id, task) => {
    const copy = [...todos];
    const current = copy.find(t => t.id === id);
    current.title = task;
    setTodos(copy);
  }


  return (
    <div className='text-gray-300 w-1/3 mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8'>Todo List</h1>
        <CreateTodoField setTodos={setTodos} />
        {!todos.length 
            ? <h1 className='text-gray-300 text-center mb-4 text-lg'>Todo List is empry</h1>
            : todos.map(todo => 
                <TodoItem 
                   key={todo.id} 
                   todo={todo} 
                   changeTodo={changeTodo} 
                   removeTodo={removeTodo}
                   changeTask={changeTask}
                />  
        )}
       <FilterTodoItem todos={todos} />
    </div>
  )
}

export default Home;
