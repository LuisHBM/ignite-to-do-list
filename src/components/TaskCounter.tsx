import { useState } from 'react'
import '../styles/TaskCounter.scss'

interface TaskCounterProps {
  createdTasks: number
  completedTasks: number
}

export function TaskCounter({ createdTasks, completedTasks } : TaskCounterProps) {
  return (
    <>
     <div className="counterContainer">
      <div className="created">
        <p>Tarefas criadas</p>
        <div>{createdTasks}</div>
      </div>
      <div className="completed">
        <p>Concluídas</p>
        <div>{completedTasks}</div>   
      </div>
     </div>
    </>
  )
}