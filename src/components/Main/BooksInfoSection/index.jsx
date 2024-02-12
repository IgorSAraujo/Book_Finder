import styles from "./styles.module.scss"
import { useState } from "react"
import { books } from "../../../data/books.js"
import { AsideSection } from "./AsideSection"
import { BooksSection } from "./BooksSection"

export const BooksInfoSection = () => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [selected, setSelected] = useState("")

  const bookFinder = books.filter((book) => {
    const searchFilter =
      search === ""
        ? true
        : book.name.toLowerCase().includes(search.toLowerCase()) ||
          book.category.toLowerCase().includes(search.toLowerCase())

    const categoryFilter = category === "" ? true : book.category === category

    const minPriceFilter = min === "" ? true : book.price >= Number(min)
    const maxPriceFilter = max === "" ? true : book.price <= Number(max)

    return searchFilter && categoryFilter && minPriceFilter && maxPriceFilter
  })

  const cleanFilters = () => {
    setSearch("")
    setCategory("")
    setMin("")
    setMax("")
    setSelected("")
  }

  return (
    <div className={styles.booksContainer}>
      <AsideSection
        cleanFilters={cleanFilters}
        setSearch={setSearch}
        setCategory={setCategory}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
        selected={selected}
        setSelected={setSelected}
      />
      <BooksSection search={search} bookList={bookFinder} />
    </div>
  )
}
