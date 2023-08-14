import React, { useEffect, useState } from 'react';
import TodoItem from '../item/TodoItem';
import FilterTodoItem from '../item/FilterTodoItem';

const TodoList = ({todos, changeTodo, removeTodo, editTask, user}) => {
    const [filter, setFilter] = useState(todos);

    const changeFilter = (isCompleted) => {
        if(isCompleted === 'all') {
            setFilter(todos);
        } else {
            setFilter([...todos].filter(t  => t.isCompleted === isCompleted));
        }
    }

    useEffect(() => {
       setFilter(todos);     
    }, [todos])


    if(!todos.length) {
        return (
            <h1 className='text-gray-300 text-center mb-4 text-lg'>
                {user.name}, your Todo List is empry
            </h1>
        )
    }

    return (
        <div className='text-gray-300 w-1/3 mx-auto'>
            {filter.map(todo => 
                <TodoItem 
                   key={todo.id} 
                   todo={todo} 
                   changeTodo={changeTodo} 
                   removeTodo={removeTodo}
                   editTask={editTask}
                />  
            )}
            <FilterTodoItem changeFilter={changeFilter} />
        </div>
    )
}

export default TodoList;
