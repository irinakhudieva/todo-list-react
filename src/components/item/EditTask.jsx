import React, { useState } from 'react';

const EditTask = ({title, onChange, editMode, setEditMode}) => {
    const [task, setTask] = useState(title)

    const deactivateEditMode = (e) => {
        if (e.key === 'Enter') {
            setEditMode(false);
            onChange(task);
        }
    }


    return editMode 
            ?  <input 
                className='bg-transparent border-none outline-none w-36'
                onChange={e => setTask(e.target.value)}
                autoFocus={true}
                onKeyDown={(e) => {deactivateEditMode(e)}}
                value={task}
            
            />
            : <span>{title}</span> 
}

export default EditTask;
