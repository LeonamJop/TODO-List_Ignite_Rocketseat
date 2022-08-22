import styles from "./styles.module.css";
import imgEmpty from "../../assets/Empty.svg"

export function EmptyFrame() {
    return (
        <div className={styles.empty}>
            <img src={imgEmpty} alt="quadro de tarefas está vazio" />
            <div className={styles.description}>
                <strong>
                    Você ainda não tem tarefas cadastradas
                </strong>
                <p>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}