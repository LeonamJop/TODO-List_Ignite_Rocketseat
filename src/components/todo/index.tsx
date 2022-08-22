import { Task } from '../task'
import styles from './styles.module.css'



export function Todo() {
    return(
        <div className={styles.todo}>
            <Task/>
        </div>
    )
}