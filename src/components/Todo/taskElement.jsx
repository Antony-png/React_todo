import React from 'react';
import './taskElement.css'

const Task = (props) => {
  const todos = props.todo
  return (
    <div className='task'>
      <p>{todos.name}</p>
      <p>{todos.due_date}</p>
      <p>{todos.description}</p>
    </div>
  );
}

export default Task;
