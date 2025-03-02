import { useDebugValue, useEffect, useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import './App.css'

// Funcion para mantener los datos al acutualizar la pagina LocalStorage
const loadTasksLocalStorage = () => {

  const storedTask = localStorage.getItem('tasks') // Obtenemos las tareas guardadas
  return storedTask ? JSON.parse(storedTask) : [] // Si hay tareas, las convertimos de JSON a objeto, si no, devolvemos un array vacío

}

function App() {


  // Estado para almacenar las lista de tareas
  const [tasks, setTasks] = useState(() => loadTasksLocalStorage())


  // Guarda las tareas en el LocalStorage
  const saveTasksLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks)) // Convertimos el array de tareas a JSON y lo guardamos
  }



  // Funcion para agregar una nueva tarea
  const addTask = (taskText) => {

    if (taskText.trim() !== "") { // Verificamos que el texto no esté vacío

      const newTasks = [...tasks, { id: Date.now(), text: taskText, complete: false }] // Creamos una nueva tarea con un ID único
      
      setTasks(newTasks)// Actualizamos el estado con la nueva lista de tareas
      saveTasksLocalStorage(newTasks) // Guardamos la lista en LocalStorage

    }
  }

  // Funcion para eliminar tarea

  const removeTask = (taskId) => {
    // Filtra la lista de tareas, eliminando la tarea con el id recibido
    const filterTask = tasks.filter((task) => task.id !== taskId)

    // Actualiza el estado con las tareas filtradas

    setTasks(filterTask) // Actualizamos el estado con la nueva lista
    saveTasksLocalStorage(filterTask) // Guardamos en LocalStorage

  }

  // Función para actualizar el estado de la tarea (marcarla como completada o no)
  const updateTask = (taskId) => {

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, complete: !task.complete } : task // Cambiamos el estado de `complete` al opuesto
    )

    setTasks(updatedTasks) // Actualizamos el estado con la lista modificada
    saveTasksLocalStorage(updatedTasks); // Guardamos los cambios en LocalStorage

  }

  // Calcular el numero de tareas pendientes
  const pendingTasksCount = tasks.filter((task) => !task.complete).length


  return (
    <>
      <h1>List de tareas</h1>

      <TaskInput 
      addTask={addTask}  
      />

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
