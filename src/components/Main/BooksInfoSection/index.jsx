import styles from "./styles.module.scss"
import { AsideSection } from "./AsideSection"
import { BooksSection } from "./BooksSection"

export const BooksInfoSection = () => {
  return (
    <div className={styles.booksContainer}>
      <AsideSection />
      <BooksSection />
    </div>
  )
}
