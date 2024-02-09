import styles from "./styles.module.scss"
import { SearchForm } from "./SearchForm"
import { Filters } from "./Filters"
import { PriceFilter } from "./PriceFilter"

export const AsideSection = () => {
  return (
    <aside className={styles.container}>
      <SearchForm />
      <Filters />
      <PriceFilter />
      <button className="btn">Limpar Filtro</button>
    </aside>
  )
}
