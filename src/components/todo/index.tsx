import { NewTask } from '../newTask'
import styles from './styles.module.css'



export function Todo() {
    return(
        <div className={styles.todo}>
            <NewTask/>
        </div>
    )
}