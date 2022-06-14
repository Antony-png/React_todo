import React from 'react';
import Task from './taskElement';

const TodoListSidebar = (props) => {
  const todos = props.state
  return (
    <div>
      <h2>Todolist</h2>
      {
        todos.map((t, i) => <Task key={i} todo={t}/>)
      }
    </div>
  );
}

export default TodoListSidebar;
