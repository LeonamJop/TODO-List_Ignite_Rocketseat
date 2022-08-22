import styles from "./styles.module.css";
import { PlusCircle } from "phosphor-react"


export function Task() {
    return (
        <>
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
            <div >
                
            </div>
        </>
    )
}