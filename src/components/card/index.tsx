import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface CardProps {
    content: string
    done: boolean
}

export function Card({content, done}: CardProps) {
    const [isChecked, setIsChecked] = useState(done);
    const [doneState, setDoneState] = useState(false)


    useEffect(() => {
        isChecked ? setDoneState(true) : setDoneState(false)
    }, [isChecked])

    return (
        <div className={styles.card}>
            <div className={styles.checkbox}>
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <label htmlFor="checkbox">
                    <p className={doneState ? styles.taskDone : ""}>
                        {content}
                    </p>
                </label>
            </div>
            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}