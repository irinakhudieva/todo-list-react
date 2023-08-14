import React, { useContext, useState } from 'react';
import CreateTodoField from './components/create-todo-field/CreateTodoField';
import TodoList from './components/todolist/TodoList';
import Header from './components/header/Header';
import Login from './components/login/Login';
import { AuthContext } from './providers/AuthProvider';

const App = () => {
    const [todos, setTodos] = useState([]);

    const changeTodo = (id) => {
        const newTodo = [...todos].find(t => t.id === id);
        newTodo.isCompleted = !newTodo.isCompleted;
        setTodos([...todos]);
    }

    const removeTodo = (id) => {
      setTodos([...todos].filter(t => t.id !== id));
    }

    const editTask = (id, task) => {
        const newTodo = [...todos].find(t => t.id === id);
        newTodo.title = task;
        setTodos([...todos]);
    }

    const {user, setUser} = useContext(AuthContext);

    return (
        <div className='text-gray-300 bg-gray-900 h-screen'>
            {user 
                ? <div> 
                    <Header user={user} setUser={setUser} />
                    <h1 className='text-3xl font-bold text-center m-8'>Todo List</h1>
                    <CreateTodoField setTodos={setTodos} />
                    <TodoList 
                        todos={todos} 
                        changeTodo={changeTodo} 
                        removeTodo={removeTodo}
                        editTask={editTask}
                        user={user}  
                    />
                  </div>
                : <Login setUser={setUser}/>
            }
        </div>
    )
}

export default App;
