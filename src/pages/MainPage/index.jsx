import styles from "./styles.module.scss"
import { DefautTemplate } from "../../components/DefautTemplate"
import { BannerSection } from "../../components/Main/BannerSection"
import { BooksInfoSection } from "../../components/Main/BooksInfoSection"

export const MainPage = () => {
  return (
    <DefautTemplate>
      <BannerSection />
      <BooksInfoSection />
    </DefautTemplate>
  )
}
