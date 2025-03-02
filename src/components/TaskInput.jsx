import { useState } from "react"

export function TaskInput({ addTask }) {
 // Estado para manejar el texto de la nueva tarea
 const [taskText, setTaskText] = useState("")

 // Maneja el envio del formulario

 const handleSubmit = (e) => {
    console.log("Testing")
     e.preventDefault() // Evita que nuestra pagina se recargue
     if (taskText.trim() === "") return
     addTask(taskText) // Agrega la tarea a la lista
     setTaskText("") // Limpia el input despues de agregar
 }
 return(
     <>
     <form onSubmit={handleSubmit}>
         <input 
         type="text" 
         value={taskText}
         onChange={(e) => setTaskText(e.target.value)} 
         placeholder = "Escribe una tarea..."
         />

         <button type="submit">Agregar</button>
         
     </form>
     
     </>
 )

}
