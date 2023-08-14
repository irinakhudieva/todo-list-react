import React, { useState } from 'react';

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        if(title) {
           setTodos(prev => [
                ...prev,
                {
                    id: new Date(),
                    title,
                    isCompleted: false
                }
            ])
            setTitle('') 
        }
    }

    return (
        <div 
            className='w-1/3 mx-auto mb-4 rounded-2xl border-gray-800 
                border-2 px-5 py-2'>
            <input 
                type='text'
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Add a task'
            />
        </div>
    )
}

export default CreateTodoField;
