import styles from "./styles.module.scss"
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { MdOutlineCheckBox } from "react-icons/md"

export const Filters = ({
  setCategory,
  selected,
  setSelected,
  cleanFilters,
  categories,
}) => {
  return (
    <div className={styles.container}>
      <h2 className="titleH2">Filtrar por categoria</h2>
      <ul className={styles.containerFilters}>
        {categories.map((category) => (
          <li
            className={`textP ${selected === category.name ? "selected" : ""}`}
            key={category.id}
            onClick={(e) => {
              selected === category.name
                ? (setCategory(""), setSelected(""))
                : (setCategory(category.name), setSelected(category.name))
            }}
          >
            <div className={styles.categoryName}>{category.name}</div>
            <div className={styles.checkbox}>
              {selected === category.name ? (
                <MdOutlineCheckBox size={20} />
              ) : (
                <MdOutlineCheckBoxOutlineBlank size={20} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
