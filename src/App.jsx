import { useState } from 'react'
import { TaskInput } from './components/TaskInput'
import './App.css'

function App() {
  // Estado para almacenar las lista de tareas
  const [task, setTask] = useState([])

  // Funcion para agregar una nueva tarea

  const addTask = (taskText) =>{
    if(taskText.trim() !== "") {
      setTask([...task, {id: Date.now(), text: taskText, complete: false}])
    }
  }

  return (
    <>
    <h1>List de tareas</h1>
    <TaskInput addTask={addTask}/>
    </>
  )
}

export default App
