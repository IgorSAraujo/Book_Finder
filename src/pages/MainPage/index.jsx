import styles from "./styles.module.scss"
import { DefautTemplate } from "../../components/DefautTemplate"
import { AsideSection } from "../../components/Main/AsideSection"
import { BooksSection } from "../../components/Main/BooksSection"
import { BannerSection } from "../../components/Main/BannerSection"

export const MainPage = () => {
  return (
    <DefautTemplate>
      <BannerSection />
      <div>
        <AsideSection />
        <BooksSection />
      </div>
    </DefautTemplate>
  )
}
