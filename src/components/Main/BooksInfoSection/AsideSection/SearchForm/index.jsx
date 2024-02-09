import styles from "./styles.module.scss"
import { MdSearch } from "react-icons/md"

export const SearchForm = () => {
  return (
    <form className={styles.container}>
      <input
        className="inputSearch textP"
        type="text"
        placeholder="Pesquisar..."
        required
      />
      <button className="btnSearch">
        <MdSearch size={21} />
      </button>
    </form>
  )
}
