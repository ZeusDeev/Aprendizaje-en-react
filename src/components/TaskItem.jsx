import React from "react"

export const TaskItem = ({task, removeTask}) => {
    return (
        <li>
            { 
            /* Muestra el texto de la tarea */ 
            task.text 
            }

            {/*Accede al prop removeTask, por medio de un callback accediendo por su id task */}
             <button onClick={ () => removeTask(task.id)}>Eliminar</button>
        </li>
    )

}