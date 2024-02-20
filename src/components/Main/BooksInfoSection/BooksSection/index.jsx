import styles from "./styles.module.scss"
import anime from "animejs"
import { useEffect } from "react"

export const BooksSection = ({ search, bookList }) => {
  useEffect(() => {
    anime({
      targets: ".card",
      translateX: 1000,
      delay: anime.stagger(50, { from: "first" }),
    })
  })

  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <span className="titleH2">Livros listados: {bookList.length}</span>
      </div>
      <div className={styles.containerBookList}>
        {search ? (
          <p className="textP">
            Resultados para a busca para: <strong>{search}</strong>
          </p>
        ) : null}

        {bookList.length > 0 ? (
          <ul>
            {bookList.map((book) => (
              <li className={`${styles.card} card`} key={book.id}>
                <div className={styles.cardTitle}>
                  <h2 className="titleH2">{book.name}</h2>
                  <p className="textP">{book.category}</p>
                </div>
                <div className={styles.cardPrice}>
                  <span className="titleH2">
                    {book.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="textP">Nenhum Resultado encontrado</p>
        )}
      </div>
    </section>
  )
}
