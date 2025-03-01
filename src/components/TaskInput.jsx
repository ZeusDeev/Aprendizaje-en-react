import { useState } from "react"

export function TaskInput({ addTask }) {
 // Estado para manejar el texto de la nueva tarea
 const [taskText, setTaskText] = useState("")

 // Maneja el envio del formulario

 const handleSubmit = (e) => {
     e.preventDefualt() // Evita que nuestra pagina se recargue
     addTask(taskText) // Agrega la tarea a la lista
     setTaskText("") // Limpia el input despues de agregar
 }
 return(
     <>
     <form onSubmit={handleSubmit}>
         <input 
         type="text" 
         onChange={(e) => e.target.value} 
         placeholder = "Escribe una tarea..."
         />

         <button type="submit">Agregar</button>
         
     </form>
     
     </>
 )

}
