import React, { useState } from 'react'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/taskSlice/taskSlice'

const Task = ({task}) => {
    const dispatch=useDispatch()
    const [onUpdate, setOnUpdate] = useState(false);
    const[newtask,setNewTask]=useState({task});

  return (
    <div>
        { onUpdate
        ?<><input type={"text"} DefaultValue={task.title} onChange {(e)=>setNewTask({})}   />
        <button onClick={()=> dispatch(editTask())}> Confirmer </button>
        <button onClick={()=> setOnUpdate(false)}> Cancel </button>
        </>
         :<> <h3> {task.title}</h3>
    <button onClick={() => setOnUpdate(true)}> update</button>
    <button onClick={() => dispatch(deleteTask(task))}>X</button></> }

   
    </div>
  )
}

export default Task;