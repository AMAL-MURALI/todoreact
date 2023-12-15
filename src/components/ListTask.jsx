import React from 'react'

const ListTask = ({task,index,removeTask}) => {
  return (
    <>
      <div className='list-task'>
        {task.title}
        <button className='delete-btn' onClick={()=>{removeTask(index)}} >Delete</button>
      </div>
      </>
  )
}

export default ListTask