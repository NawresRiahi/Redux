import { addListener } from '@reduxjs/toolkit';
import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice/taskSlice';

const Header = () => {
    const [newTask, setNewTask] = useState({title:""});
    const dispatch = useDispatch()

  return (
    <div><input value={newTask.title} type="text" placeholder="write your Task ..."
    onChange={(e)=>setNewTask({...newTask,title:e.target.value})}></input>
    <button onClick={
        ()=>{dispatch(addTask({...newTask,isDone:false,
    id:Math.floor(Math.random()*100000000000000)})); setNewTask({title:""})
    }}> Add</button></div>
  )
}

export default Header 