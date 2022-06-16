import React, { useState } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';
import Form from './components/Form/form';
import TaskList from './components/Task/taskList'
// import data from './state';
import './App.css';


function App() {
  console.log('render');
  const [listId, setListId] = useState('')
  const [tasks, setTasks] = useState([
    {
      name: 'Create task list 1',
      due_date: '2022-09-22',
      task_id: 6,
      list_id: 1,
      description: ''
    },
    {
      name: 'Create task list 2',
      due_date: '2022-12-22',
      task_id: 1,
      list_id: 2,
      description: 'Test text 1234567890987654321 txet tseT Test text 1234567890987654321 txet tseT'
    },
    {
      name: 'Create task2 list 2',
      due_date: '2021-11-21',
      task_id: 2,
      list_id: 2,
      description: 'Test'
    }
  ])
  
  const createTodo = (todoValue) => {
    setTasks(todoValue)
  }
  
  const setTasksByListId = (value) => {
    setListId(value)
  }
  
  const deleteTask = (todo) => {
    const tasksLists = tasks.filter((element) => element.task_id !== todo.task_id)
    setTasks(tasksLists)
  }

  const taskList = [...tasks].filter((element) => element.list_id === listId)
  console.log(tasks);
  return (
    <div className="App">
      <Header />
     <div className='App-main'>
      <div className='App-sidebar'>
          <Sidebar setTasksByListId={setTasksByListId}/>   
        </div>
        <div className='App-container'>
          <TaskList tasks={taskList} deleteTodo={deleteTask}/>
          <Form listId={listId} todo={tasks} createTodo={createTodo}/> 
        </div>
     </div>
    </div>
  );
}

export default App;
