import { Card } from "../card";
import styles from "./styles.module.css";

export function FilledFrame() {
    return (
        <div className={styles.filledFrame}>
            <Card/>
        </div>
    )
}