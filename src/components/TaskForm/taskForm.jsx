import React from "react";

function TaskForm (props){

  const createTask = () => {
    
  }

  const submitChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }
  console.log(props.state);
    return (
      <form onSubmit={submitChange} id="task-form" autoComplete="off">
          <input type="text"
                 name="name"
                 placeholder="task name"
          />
          <input type="date"
                 name="due_date"
                 placeholder="date"
           />
           <input type="text"
                  name="description"
                  placeholder="description"
           />
          <button type="submit" id="btn-add">Add</button>
      </form>
    )
  
}

export default TaskForm