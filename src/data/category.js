import { booksApi, books } from "./books.js"

const allCategories = booksApi.reduce((categories, book) => {
  if (book.volumeInfo && book.volumeInfo.categories) {
    categories.push(...book.volumeInfo.categories)
  }
  return categories
}, [])

// Remoção das categorias duplicadas
const categoriesFilter = Array.from(new Set(allCategories))

// Criação um array de objetos com categorias únicas
export const categories = categoriesFilter.map((category, index) => ({
  id: index + 1,
  name: category,
}))
