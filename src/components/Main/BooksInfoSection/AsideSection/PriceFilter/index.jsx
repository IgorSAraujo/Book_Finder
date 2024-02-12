import styles from "./styles.module.scss"
import { useState } from "react"
import { PriceInput } from "./PriceInput"

export const PriceFilter = ({ min, setMin, max, setMax }) => {
  const [value, setValue] = useState("")

  return (
    <div>
      <h2 className="titleH2">Filtrar por preço</h2>
      <PriceInput id="min" label="Mínimo (R$)" value={min} setValue={setMin} />
      <PriceInput id="max" label="Maximo (R$)" value={max} setValue={setMax} />
    </div>
  )
}
