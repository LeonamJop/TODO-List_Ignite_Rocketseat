import styles from "./styles.module.css";
import { EmptyFrame } from "../emptyFrame";
import { Card } from "../card";
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from "react";
import { NewTask } from "../newTask";


interface CardProps {
    id: string,
    content: string,
    done: boolean
}

export function TaskBoard() {
    const [taskList, setTaskList] = useState<CardProps[]>([]);
    const [tasksDone, setTasksDone] = useState(0);

    function creatTask(onCreatTask: string) {
        const newTaskList = [...taskList];
        newTaskList.push({
            id: uuid(),
            content: onCreatTask,
            done: false
        });
        setTaskList(newTaskList);
    }

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
            setTaskList(taskList);
        })

        recalculateTaskDone();
    }

    const recalculateTaskDone = () => {
        const countTasksDone = taskList.filter(task => {
            return (
                task.done === true
            )
        })
        setTasksDone(countTasksDone.length);
    }

    useEffect(() => {
        recalculateTaskDone();
    }, [taskList]);

    return (
        <div className={styles.todo}>
            <NewTask
                onCreatTask={creatTask}
            />
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
        </div>
    )
}