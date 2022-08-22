import styles from "./styles.module.css";
import todoLogo from '../../assets/Logo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img
                src={todoLogo}
                alt="logo da todo list"
            />
        </header>
    )
}