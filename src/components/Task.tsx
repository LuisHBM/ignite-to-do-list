import { TaskType } from "./TaskForm";
import '../styles/Task.scss';
import { Trash, Check} from "phosphor-react";

interface TaskProps extends TaskType {
  onCheckbox: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ content, onCheckbox, onDeleteTask, id}: TaskProps) {
  
  function handdleCheckBox() {
    onCheckbox(id);
  }

  function handdleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <>
      <div className="taskBody">
        <input onChange={handdleCheckBox} type="checkbox" className="checkbox" />
        <p className="content">
          {content}
        </p>
        <div className="allign-right"></div>
        <Trash size={20} className="trash" onClick={handdleDeleteTask}/>
      </div>
    </>
  )
}