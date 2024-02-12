import styles from "./styles.module.scss"
import logoWhite from "../../assets/LogoWhite.svg"

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerInfos}>
        <img src={logoWhite} alt="Logo Books" />
        <p className="textP">
          Todos os direitos reservados - Kenzie Academy Brasil
        </p>
      </div>
    </footer>
  )
}
