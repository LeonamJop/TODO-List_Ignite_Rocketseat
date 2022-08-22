import styles from "./styles.module.css";
import { PlusCircle } from "phosphor-react"
import { TaskBoard } from "../taskBoard";


export function NewTask() {
    return (
        <div>
            <div className={styles.task}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />
                <button>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </div>
            <TaskBoard/>
        </div>
    )
}