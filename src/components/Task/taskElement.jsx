import React from 'react';
import './taskElement.css'

const Task = (props) => {
  const todo = props.todo 


  return (
    <div className='task'>
      <input type="checkbox" name="checkbox" id="" />
      <h3>{todo.name}</h3>
      <h3>{todo.due_date}</h3>
      <button onClick={() => props.deleteTodo(todo)}>Delete</button>
      <p>{todo.description}</p>
    </div>
  );
}

export default Task;
