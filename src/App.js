import { useState } from 'react';
import TodoList from './components/Todo/taskList';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';
import TaskForm from './components/TaskForm/taskForm';
// import data from './state';
import './App.css';

function App() {

  const [state, setState] = useState([
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
  ]);

  const [task, setTask] = useState([])

  return (
    <div className="App">
      <Header />
     <div className='App-main'>
      <div className='App-sidebar'>
          <Sidebar state={state}/>   
        </div>
        <div className='App-container'>
          <TodoList state={state}/>
          <TaskForm state={task} setState={setTask}/>
        </div>
     </div>
    </div>
  );
}

export default App;
