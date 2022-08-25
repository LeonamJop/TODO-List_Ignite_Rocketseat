import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface CardProps {
    id: string
    content: string;
    done: boolean;
    onDelete: (card: string) => void;
    onDone: (checked: boolean, id: string) => void;
}

export function Card({id, content, done, onDelete, onDone}: CardProps) {
    const [isChecked, setIsChecked] = useState(done);
    const [doneState, setDoneState] = useState(false);

    function handleDeleteCard() {
        onDelete(id)
    }

    useEffect(() => {
        isChecked ? setDoneState(true) : setDoneState(false)
        isChecked ? onDone(true, id) : onDone(false, id)
    }, [isChecked])

    return (
        <div
            className={[ styles.card, styles.cardDone].join(" ")}
            style={{ border: doneState ? "none" : "1px solid var(--gray-400)"}}
        >
            <div className={styles.checkbox}>
                <input
                    id={id}
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <label htmlFor={id}>
                    <p className={doneState ? styles.taskDone : ""}>
                        {content}
                    </p>
                </label>
            </div>
            <button
                onClick={handleDeleteCard}
            >
                <Trash size={24} />
            </button>
        </div>
    )
}