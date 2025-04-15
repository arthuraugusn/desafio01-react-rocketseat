import styles from "./Header.module.css";
import rocketIcon from "../assets/rocket-icon.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketIcon} alt="Icone de Foguete" />
      <h1>
        to<span>do</span>
      </h1>
    </header>
  );
}
