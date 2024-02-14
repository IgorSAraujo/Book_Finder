import styles from "./styles.module.scss"
import { MdMenu } from "react-icons/md"
import { MdMenuOpen } from "react-icons/md"

export const MenuMobile = ({
  openMenu,
  menuAnimationClosed,
  menuAnimationOpen,
  toggleMenu,
}) => {
  return (
    <div className={styles.menuContainer}>
      <span onClick={toggleMenu}>
        {openMenu ? (
          <MdMenuOpen
            className={menuAnimationOpen ? styles.menuOpen : ""}
            size={35}
            color="6787f9"
          />
        ) : (
          <MdMenu
            className={menuAnimationClosed ? styles.menuClosed : ""}
            size={35}
            color="6787f9"
          />
        )}
      </span>
      <p className="titleH2">Filtros</p>
    </div>
  )
}
