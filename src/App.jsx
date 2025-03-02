import { useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import './App.css'

function App() {
  // Estado para almacenar las lista de tareas
  const [tasks, setTasks] = useState([])



  // Funcion para agregar una nueva tarea

  const addTask = (taskText) =>{
    if(taskText.trim() !== "") {
      const newTasks = [...tasks, {id: Date.now(), text: taskText, complete: false}]
      setTasks(newTasks)
      console.log("Tareas actualizadas:", newTasks);
    }
  }

  return (
    <>
    <h1>List de tareas</h1>
    <TaskInput addTask={addTask}/>
    <TaskList tasks={tasks}/>
    </>
  )
}

export default App
