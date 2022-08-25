import styles from "./styles.module.css";
import { EmptyFrame } from "../emptyFrame";
import { Card } from "../card";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";


const cards = [{
    id: uuid(),
    content: "Teste novo card 1",
    done: true
}, {
    id: uuid(),
    content: "Teste novo card 2",
    done: false
}, {
    id: uuid(),
    content: "Teste novo card 3",
    done: false
},
]

export function TaskBoard() {
    const [taskList, setTaskList] = useState(cards);
    const [tasksDone, setTasksDone] = useState(0);

    function deleteTask(taskIdToDelete: string) {
        const taskWithoutDeleteOne = taskList.filter(task => {
            return task.id !== taskIdToDelete;
        })
        setTaskList(taskWithoutDeleteOne);
    }

    function handleCheckTask(done: boolean, id: string) {
        taskList.map(task => {
            if (task.id === id) {
                task.done = done
            }
            setTaskList(taskList)
        })

        const countTasksDone = taskList.filter(task => {
            return(
                task.done === true 
            )
        })
        
        setTasksDone(countTasksDone.length)

        console.log(taskList);
    }

    return (
        <div className={styles.taskBoard}>
            <div className={styles.countTasks}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <p>{taskList.length}</p>
                </div>
                <div className={styles.done}>
                    <strong>Concluídas</strong>
                    <p>{taskList.length ? `${tasksDone} de ${taskList.length}` : '0'}</p>
                </div>
            </div>
            {taskList.length ?
                <div className={styles.filledFrame}>
                    {taskList.map(task => {
                        return (
                            <Card
                                key={task.id}
                                id={task.id}
                                content={task.content}
                                done={task.done}
                                onDelete={deleteTask}
                                onDone={handleCheckTask}
                            />
                        )
                    })}
                </div>
                :
                <EmptyFrame />
            }

        </div>
    )
}