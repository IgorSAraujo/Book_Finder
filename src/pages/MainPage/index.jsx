import styles from "./styles.module.scss"
import { DefautTemplate } from "../../components/DefautTemplate"
import { AsideSection } from "../../components/Main/AsideSection"
import { BooksSection } from "../../components/Main/BooksSection"

export const MainPage = () => {
  return (
    <DefautTemplate>
      <div>
        <AsideSection />
        <BooksSection />
      </div>
    </DefautTemplate>
  )
}
