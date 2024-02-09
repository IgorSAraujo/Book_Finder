import styles from "./styles.module.scss"
import logoBookBlue from "../../assets/LogoBlue.svg"
export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logoBookBlue} alt="Livro Aberto" />
    </header>
  )
}
