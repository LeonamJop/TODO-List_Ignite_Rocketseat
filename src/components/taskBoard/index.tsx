import { EmptyFrame } from "../emptyFrame";
import styles from "./styles.module.css";
import { uuid } from 'uuidv4'
import { FilledFrame } from "../filledFrame";

export function TaskBoard() {
    return (
        <div className={styles.taskBoard}>
            <div className={styles.countTasks}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <p>1</p>
                </div>
                <div className={styles.done}>
                    <strong>Tarefas criadas</strong>
                    <p>1</p>
                </div>
            </div>
            <FilledFrame/>
            {/* <EmptyFrame/> */}
        </div>
    )
}