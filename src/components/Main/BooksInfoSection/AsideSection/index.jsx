import styles from "./styles.module.scss"
import { SearchForm } from "./SearchForm"
import { Filters } from "./Filters"
import { PriceFilter } from "./PriceFilter"

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
  return (
    <aside className={styles.container}>
      <SearchForm setSearch={setSearch} />
      <Filters
        setCategory={setCategory}
        cleanFilters={cleanFilters}
        selected={selected}
        setSelected={setSelected}
      />
      <PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
      <button className="btn" onClick={cleanFilters}>
        Limpar Filtro
      </button>
    </aside>
  )
}
