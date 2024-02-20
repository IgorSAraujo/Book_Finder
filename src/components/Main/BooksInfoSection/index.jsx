import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import { AsideSection } from "./AsideSection"
import { BooksSection } from "./BooksSection"
import { bookApi } from "../../../services/booksApi.js"

export const BooksInfoSection = () => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")
  const [selected, setSelected] = useState("")
  const [book, setBook] = useState([])

  const getBooks = async () => {
    const { data } = await bookApi.get(
      "/books/v1/volumes?q=random&filter=paid-ebooks&maxResults=12"
    )

    setBook(data.items)
  }

  useEffect(() => {
    getBooks()
  }, [])

  const newBooks = book.map((book) => {
    const price =
      book.saleInfo && book.saleInfo.listPrice
        ? book.saleInfo.listPrice.amount
        : "Preço não disponivel"
    return {
      id: book.id,
      name: book.volumeInfo.title,
      category: book.volumeInfo.categories,
      price: price,
    }
  })

  const newCategories = () => {
    const allCategories = book.reduce((categories, book) => {
      if (book.volumeInfo && book.volumeInfo.categories) {
        categories.push(...book.volumeInfo.categories)
      }
      return categories
    }, [])

    const categoriesFilter = Array.from(new Set(allCategories))

    // Criação um array de objetos com categorias únicas
    const finalCategories = categoriesFilter.map((category, index) => ({
      id: index + 1,
      name: category,
    }))

    return finalCategories
  }

  const categories = newCategories()

  const bookFinder = newBooks.filter((book) => {
    const searchFilter =
      search === ""
        ? true
        : book.name.toLowerCase().includes(search.toLowerCase()) ||
          (typeof book.category === "string" &&
            book.category.toLowerCase().includes(search.toLowerCase()))

    const categoryFilter =
      category === "" ? true : book.category && book.category.includes(category)

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
        categories={categories}
      />
      <BooksSection search={search} bookList={bookFinder} />
    </div>
  )
}
