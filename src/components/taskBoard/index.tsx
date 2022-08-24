import styles from "./styles.module.css";
import { EmptyFrame } from "../emptyFrame";
import { Card } from "../card";
import { v4 as uuid } from 'uuid';


const cards = [{
    id: uuid(),
    content: "Teste novo card",
    done: true
}, {
    id: uuid(),
    content: "Teste novo card",
    done: false
}, {
    id: uuid(),
    content: "Teste novo card",
    done: false
},
]

export function TaskBoard() {
    return (
        <div className={styles.taskBoard}>
            <div className={styles.countTasks}>
                <div className={styles.created}>
                    <strong>Tarefas criadas</strong>
                    <p>{cards.length}</p>
                </div>
                <div className={styles.done}>
                    <strong>Concluídas</strong>
                    <p>0</p>
                </div>
            </div>
            {cards.length ?
                <div className={styles.filledFrame}>
                    {cards.map(card => {
                        return (
                            <Card
                                key={card.id}
                                content={card.content}
                                done={card.done}
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