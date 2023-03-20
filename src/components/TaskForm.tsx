import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from './Task';
import { TaskCounter } from './TaskCounter';
import '../styles/TaskForm.scss'
import plusIcon from '../assets/plus.svg'
import { Clipboard } from 'phosphor-react';

export interface TaskType {
  content: string;
  isDone: boolean;
  id: number;
}

export function TaskForm() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);

  const isDisabled = newTask.length === 0;
  const isTasksEmpty = tasks.length === 0;

  function getNumberOfCompletedTasks() {
    setCompletedTasks(tasks.filter(task => {
      return task.isDone === true;
    }).length)
  }

  function handdleNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  function handdleTasks(event: FormEvent) {
    event.preventDefault();

    const allTasks = [...tasks, {content: newTask, isDone: false, id: tasks.length}];
    setTasks(allTasks);
    setNewTask('');
  }

  function handdleCheckbox(id : number) {
    const updatedTasks = tasks;
    updatedTasks[id].isDone = !updatedTasks[id].isDone

    setTasks(updatedTasks);
    getNumberOfCompletedTasks();
  }

  function handdleDeleteTask(id: number) {
    const commentsWithoutDeletedOne = tasks.filter(task => {
      return id != task.id
    });

    setTasks(commentsWithoutDeletedOne);
  }

  return (
    <>
      <form onSubmit={handdleTasks}>

        <textarea 
          name="task"
          placeholder='Adicione uma nova tarefa'
          onChange={handdleNewTask}
          value={newTask}
        />

        <button type='submit' disabled={isDisabled}>
          Criar
          <img src={plusIcon} alt="Plus Icon" />
        </button>

      </form>

      <TaskCounter 
        completedTasks={completedTasks}
        createdTasks={tasks.length}
      />

      <div className='container'>
        <div className='tasks'>
          {isTasksEmpty ?
            <div className='noTasks'>
              <Clipboard size={56}/>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p> Crie tarefas e organize seus itens a fazer </p>
            </div>
            :
            tasks.map(task => { 
              return <Task
                content={task.content}
                isDone={task.isDone}
                id={task.id}
                onCheckbox = {handdleCheckbox}
                onDeleteTask = {handdleDeleteTask}
                key={task.content}
              />
            })
          }
        </div>
      </div>
    </>
  )
}