import React from 'react';
import Task from './taskElement';

const ListTasks = (props) => {
  const tasks = props.tasks
  return (
    <div>
      <h2>Todolist</h2>
      {
        tasks.map((t, i) => <Task key={t.task_id}
          taskId={t.task_id} todo={t} 
          deleteTodo={props.deleteTodo}
          setDoneTask={props.setDoneTask}
        />)
      }
    </div>
  );
}

export default ListTasks;
