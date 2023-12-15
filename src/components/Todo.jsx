import React, { useEffect, useState } from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'
const Todo = () => {
    const [task,setTask]=useState([])
    useEffect(()=>{
        document.title=`You have ${task.length} pending task`
    })
    const addTask=(title)=>{
        const newTask=[...task,{title}]
        setTask(newTask)
    }
    const removeTask=(index)=>{
        const newTasks=[...task]
        newTasks.splice(index,1)
        setTask(newTasks)
    }
  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
            <AddTask addTask={addTask}  />
        </div>
        <div className='task'>
            {task.map((task,index)=>(
                 <ListTask task={task} removeTask={removeTask} index={index} key={index}/>
            ))}
           
        </div>
    </div>
    
    </>
     
    
  )
}

export default Todo