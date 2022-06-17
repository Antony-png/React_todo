import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { Switch, Route } from "react-router"
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';
import Form from './components/Form/form';
import TaskList from './components/Task/taskList'
// import data from './state';
import './App.css';


function App() {
  console.log('render');
  const [listId, setListId] = useState('')
  // const [tasks, setTasks] = useState([
  //   {
  //     name: 'Create task list 1',
  //     due_date: '2022-09-22',
  //     task_id: 6,
  //     list_id: 1,
  //     description: '',
  //     done: false,
  //   },
  //   {
  //     name: 'Create task list 2',
  //     due_date: '2022-12-22',
  //     task_id: 1,
  //     list_id: 2,
  //     description: 'Test text 1234567890987654321 txet tseT Test text 1234567890987654321 txet tseT',
  //     done: false,
  //   },
  //   {
  //     name: 'Create task2 list 2',
  //     due_date: '2021-11-21',
  //     task_id: 2,
  //     list_id: 2,
  //     description: 'Test',
  //     done: false,
  //   }
  // ])
  const [tasks, setTasks] = useState([])
 
  const getTodo = async () => {
    try {
      await axios.get(`http://localhost:1337/tasks`, {
        headers: {
          'Content-Type': 'application-json'
        }
      }).then(response => setTasks(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => { 
    getTodo() 
  }, []); 
  
  const postTodo = async (task) => {
    try {
      await axios.post(`http://localhost:1337/tasks`,task)
    } catch (error) {
      console.log(error);
    }
  }
  
  const createTodo = (todoValue) => {
    setTasks([...tasks, todoValue])
    const task = {
      description: todoValue.description,
      done: todoValue.done,
      due_date: todoValue.due_date,
      list_id: todoValue.list_id,
      name: todoValue.name,
    }
    postTodo(task)
  }
  
  const delTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/tasks/${id}`)
    } catch (error) {
      console.log(error); 
    }
  }

  const updateTodo = async (task) => {
    const id = task.task_id
    console.log(task);
    try {
      await axios.patch(`http://localhost:1337/tasks/${id}`, {done: task.done} )
    } catch (error) {
      console.log(error);
    }
  }

  const setTasksByListId = (value) => {
    setListId(value)
  }
  
  const deleteTask = (todo) => {
    const tasksLists = tasks.filter((element) => element.task_id !== todo.task_id)
    const id = todo.task_id
    delTodo(id)
    setTasks(tasksLists)
  }

  const setDoneTask = (todo) => {
    tasks.forEach((t) => {
      if(t.task_id === todo.task_id) {
        t.done = !t.done
      }
    })
    updateTodo(todo)
  }
  const taskList = [...tasks].filter((element) => element.list_id === listId)

  return (
    <div className="App">
      <Header />
     <div className='App-main'>
      <div className='App-sidebar'>
          <Sidebar setTasksByListId={setTasksByListId}/>   
        </div>
        <div className='App-container'>
          <TaskList  tasks={taskList} deleteTodo={deleteTask} setDoneTask={setDoneTask}/>
          <Form listId={listId} todo={tasks} createTodo={createTodo}/> 
        </div>
     </div>
    </div>
  );
}

export default App;
