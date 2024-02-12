import styles from "./styles.module.scss"
import { useState } from "react"
import { MdSearch } from "react-icons/md"

export const SearchForm = ({ setSearch }) => {
  const [value, setValue] = useState("")

  const submit = (e) => {
    e.preventDefault()
    setSearch(value)
    setValue("")
  }
  return (
    <form className={styles.container} onSubmit={submit}>
      <input
        className="inputSearch textP"
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button className="btnSearch" type="submit">
        <MdSearch size={21} />
      </button>
    </form>
  )
}
