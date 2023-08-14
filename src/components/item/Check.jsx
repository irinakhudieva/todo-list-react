import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Check = ({isCompleted, changeTodo, id}) => {
  return (
    <div onClick={() => changeTodo(id)}
        className={`border-2 rounded-lg border-pink-500 
            ${isCompleted ? 'bg-pink-500' : ''} 
            w-5 h-5 mr-3 flex items-center fustify-center cursor-pointer`}>
        {
            isCompleted && 
            <BsCheck size={24} className='text-gray-900'/>
        }
        
    </div>
  )
}

export default Check;
