import styles from "./styles.module.css";
import { PlusCircle } from "phosphor-react"
import { ChangeEvent, InvalidEvent, useState } from "react";

interface TaskProps {
    onCreatTask: (task: string) => void
}

export function NewTask({onCreatTask}: TaskProps) {
    const [newTask, setNewTask] = useState('');

    function handleCreatNewTask() {
        if(newTask !== ''){
            onCreatTask(newTask);
            setNewTask('');
        }
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    return (
        <div>
            <div className={styles.task}>
                <input
                    type="text"
                    value={newTask}
                    placeholder="Adicione uma nova tarefa"
                    onChange={e =>  setNewTask(e.target.value)}
                />
                <button
                    onClick={handleCreatNewTask}
                >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </div>
        </div>
    )
}