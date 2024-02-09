import styles from "./styles.module.scss"

import { categories } from "../../../../../data/category.js"

export const Filters = () => {
  return (
    <div className={styles.container}>
      <h2 className="titleH2">Filtrar por categoria</h2>
      <ul className={styles.containerFilters}>
        {categories.map((category) => (
          <li className="textP" key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
