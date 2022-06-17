import React from 'react';
import './taskElement.css'

const Task = (props) => {
  const todo = props.todo

  return (
    <div className='task'>
      {todo.done ? <input type="checkbox" name="checkbox" id="" onClick={() => props.setDoneTask(todo)} checked /> : <input type="checkbox" name="checkbox" id="" onClick={() => props.setDoneTask(todo)} />}
      <h3>{todo.name}</h3>
      <h3>{todo.due_date}</h3>
      <button onClick={() => props.deleteTodo(todo)}>Delete</button>
      <p>{todo.description}</p>
    </div>
  );
}

export default Task;
