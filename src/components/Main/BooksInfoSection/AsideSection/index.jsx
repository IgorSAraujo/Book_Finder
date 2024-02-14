import styles from "./styles.module.scss"
import { SearchForm } from "./SearchForm"
import { Filters } from "./Filters"
import { PriceFilter } from "./PriceFilter"
import { MenuMobile } from "./MenuMobile"
import { useState } from "react"

export const AsideSection = ({
  cleanFilters,
  setSearch,
  setCategory,
  min,
  setMin,
  max,
  setMax,
  selected,
  setSelected,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [menuAnimationOpen, setMenuAnimationOpen] = useState(false)
  const [menuAnimationClosed, setMenuAnimationClosed] = useState(true)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
    setMenuAnimationOpen(!menuAnimationOpen)
    setMenuAnimationClosed(!menuAnimationClosed)
    setMenuOpen(!menuOpen)
  }

  return (
    <aside className={styles.container}>
      <MenuMobile
        openMenu={openMenu}
        menuAnimationOpen={menuAnimationOpen}
        menuAnimationClosed={menuAnimationClosed}
        toggleMenu={toggleMenu}
      />
      <div
        className={`${styles.menuDesktop} ${
          menuOpen ? styles.menuDesktopOpen : ""
        }`}
      >
        <div>
          <SearchForm setSearch={setSearch} />
          <Filters
            setCategory={setCategory}
            cleanFilters={cleanFilters}
            selected={selected}
            setSelected={setSelected}
          />
          <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
        </div>
        <button className="btn" onClick={cleanFilters}>
          Limpar Filtro
        </button>
      </div>
    </aside>
  )
}
