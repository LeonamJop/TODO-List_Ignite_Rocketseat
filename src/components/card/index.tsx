import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

export function Card() {
    return(
        <div className={styles.card}>
            <input type="checkbox"/>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={24}/>
        </div>
    )
}