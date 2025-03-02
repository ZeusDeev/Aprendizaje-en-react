import { useDebugValue, useEffect, useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import './App.css'

// Funcion para mantener los datos al acutualizar la pagina LocalStorage
const loadTasksLocalStorage = () => {

  const storedTask = localStorage.getItem('tasks')
  return storedTask ? JSON.parse(storedTask) : []
}

function App() {


  // Estado para almacenar las lista de tareas
  const [tasks, setTasks] = useState(() => loadTasksLocalStorage())


  // Guarda las tareas en el LocalStorage
  const saveTasksLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }



  // Funcion para agregar una nueva tarea
  const addTask = (taskText) => {

    if (taskText.trim() !== "") {

      const newTasks = [...tasks, { id: Date.now(), text: taskText, complete: false }]
      setTasks(newTasks)
      saveTasksLocalStorage(newTasks) // Guardamos en localStorage

    }
  }

  // Funcion para eliminar tarea

  const removeTask = (taskId) => {
    // Filtra la lista de tareas, eliminando la tarea con el id recibido
    const filterTask = tasks.filter((task) => task.id !== taskId)

    // Actualiza el estado con las tareas filtradas
    setTasks(filterTask)
    saveTasksLocalStorage(filterTask)

  }

  // Función para actualizar el estado de la tarea (marcarla como completada o no)
  const updateTask = (taskId) => {

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, complete: !task.complete } : task
    )

    setTasks(updatedTasks)
    saveTasksLocalStorage(updatedTasks);

  }

  // Calcular el numero de tareas pendientes
  const pendingTasksCount = tasks.filter((task) => !task.complete).length


  return (
    <>
      <h1>List de tareas</h1>
      <TaskInput addTask={addTask} />
      {/* Pasamos la función tasks y removeTask como prop a TaskList */}
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        updateTask={updateTask} />
      <div className="task-counter">
        <p>{pendingTasksCount} Tareas pendientes</p>
      </div>
    </>
  )
}

export default App
