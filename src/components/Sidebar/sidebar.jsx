import React from 'react';
import './sidebar.css';

const Sidebar = (props) => {
  return (
    <div className='sidebar-links' >
      <h2>Sidebar</h2>
        <div><a href='#' onClick={() => props.setTasksByListId(1)}> List №1</a></div>
        <div><a href='#' onClick={() => props.setTasksByListId(2)}> List №2</a></div>
        <div><a href='#' onClick={() => props.setTasksByListId(3)}> List №3</a></div> 
    </div>
  );
}

export default Sidebar;
