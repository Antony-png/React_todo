import React, { useState } from 'react';
import './form.css'

const Form = (props) => {
  const todos = props.todo
  
  let maxId = todos.map((element) => element.task_id)
  let initialTaskId = Math.max(...maxId)

  const listId = props.listId
  const nameField = useTextField('', 'name')
  const due_dateField = useTextField('', 'due_date')
  const descriptionField = useTextField('', 'description')

  const taskForm = useForm(
    nameField,
    due_dateField,
    descriptionField,
  )

  const onSubmitHandle = (event) => {
    event.preventDefault()
    props.createTodo(
      [
        ...todos,
        taskForm.value,
      ]
    )
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
        if(newObj.task_id < 0) {
          newObj.task_id = 1
        }
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

