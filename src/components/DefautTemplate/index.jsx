import { Header } from "../Header"
import { Footer } from "../Footer"

export const DefautTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
