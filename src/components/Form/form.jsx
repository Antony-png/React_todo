import React, { useState } from 'react';
import './form.css'

const Form = (props) => {
  const todos = props.todo
  const listId = props.listId
  let maxId = todos.map((element) => element.task_id)
  let initialTaskId = Math.max(...maxId)

  const nameField = useTextField('', 'name')
  const due_dateField = useTextField('', 'due_date')
  const descriptionField = useTextField('', 'description')

  const taskForm = useForm(
    nameField,
    due_dateField,
    descriptionField,
    )

    console.log('TaskForm....................');
    console.log(taskForm.value);
    console.log('........................');
    
  const onSubmitHandle = (event) => {
    event.preventDefault()
    props.createTodo(taskForm.value)
    taskForm.reset()
  }

  function useTextField(init, name) {
    const [value, setValue] = useState(init)
    const fieldProps = {    
      name,
      onChange: (e) => setValue(e.target.value),
    };
    Object.defineProperty(fieldProps, 'value', {
      get: () => value,
      set: setValue,
      enumerable: true
    })
    return fieldProps
  }

  function useForm(...fields) {
    return {
      get value() { 
        const newObj = Object.fromEntries(fields.map(f => [f.name, f.value]))
        newObj.list_id = parseInt(listId)
        newObj.task_id = initialTaskId + 1
        newObj.done = false
        if(newObj.task_id < 0) {
          newObj.task_id = 1
        }
          console.log('newObj....................');
          console.log(newObj);
          console.log('........................');
        return newObj
      },
      reset() {
        fields.forEach(element => {
          element.value = ''
        });
      }
    }
  }

  return (
    <div className='App-form'>
      <form onSubmit={onSubmitHandle}>
        <input type="text"
          name="name"
          placeholder="task name"
          {...nameField}
        />
        <input type="date"
          name="due_date"
          placeholder="date"
          {...due_dateField}
        />
        <input type="text"
          name="description"
          placeholder="description"
          {...descriptionField}
        />
        <button type="submit" id="btn-add">Add</button>
      </form>
    </div>
  );
}



export default Form;

