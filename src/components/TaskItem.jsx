import React from "react"


// Componente TaskItem para mostrar cada tarea
export const TaskItem = ({task, removeTask, updateTask}) => {

 // Función para manejar el cambio en el checkbox (marcar/desmarcar como completada)
 const handleCheckBoxChange = () => {
    updateTask(task.id)
 }
    return (
        <li>
            <input 
            type="checkbox"
            checked = {task.complete}
            onChange={handleCheckBoxChange}
             />
            { 
            /* Muestra el texto de la tarea */ 
            task.text 
            }

            {/*Accede al prop removeTask, por medio de un callback accediendo por su id task */}
             <button onClick={ () => removeTask(task.id)}>Eliminar</button>
        </li>
    )

}