export const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=quilting"

export const booksApi = await fetch(
  "https://www.googleapis.com/books/v1/volumes?q=random&filter=paid-ebooks&maxResults=12",
  {
    method: "GET",
    headers: { "content-type": "application/json" },
  }
)
  .then((api) => api.json())
  .then((booksApi) => {
    return booksApi.items
  })

export const books = booksApi.map((book) => {
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
