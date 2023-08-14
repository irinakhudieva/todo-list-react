import React, { useState } from 'react';
import Check from './Check';
import { BsTrash } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
import EditTask from './EditTask';


const TodoItem = ({todo, changeTodo, removeTodo, editTask}) => {

    const [editMode, setEditMode] = useState(false);

    const onChangeTitleHandler = (task) => {
        editTask(todo.id, task)
    }

    return (
        <div 
            className='flex justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'
        >
            <span className={`flex items-center ${todo.isCompleted ? 'line-through' : ''}`}>
                <Check 
                    isCompleted={todo.isCompleted} 
                    changeTodo={changeTodo} 
                    id={todo.id} 
                />
                <EditTask 
                    title={todo.title} 
                    onChange={onChangeTitleHandler} 
                    editMode={editMode} 
                    setEditMode={setEditMode}
                />
            </span>
            <span>
                <button
                    onClick={() => setEditMode(!editMode)}
                >
                    <GoPencil  
                        size={22} 
                        className='text-gray-300 hover:text-pink-500 transition-colors ease-in-out duration-300 mr-3'/>
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                    <BsTrash 
                        size={22} 
                        className='text-gray-300 hover:text-pink-500 transition-colors ease-in-out duration-300'/>
                </button>
            </span>
        </div>
    
  )
}

export default TodoItem;

