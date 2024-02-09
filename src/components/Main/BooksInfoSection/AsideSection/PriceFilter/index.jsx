import styles from "./styles.module.scss"
import { PriceInput } from "./PriceInput"
export const PriceFilter = () => {
  return (
    <div>
      <h2 className="titleH2">Filtrar por preço</h2>
      <PriceInput id="min" label="Mínimo (R$)" />
      <PriceInput id="max" label="Maximo (R$)" />
    </div>
  )
}
