import React from 'react';

const FilterTodoItem = ({changeFilter}) => {
  
    return (
        <div className='flex justify-between items-center rounded-2xl bg-gray-700 p-5 w-2/3 h-4 m-auto'>
            <button onClick={() => {changeFilter('all')}} className='active:text-gray-400'>All</button>
            <button onClick={() => {changeFilter(false)}} className='active:text-gray-400'>Active</button>
            <button onClick={() => {changeFilter(true)}} className='active:text-gray-400'>Completed</button>
        </div>
    )
}

export default FilterTodoItem;
