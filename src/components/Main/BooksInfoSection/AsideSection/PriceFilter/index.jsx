import styles from "./styles.module.scss"
import { useState } from "react"
import { PriceInput } from "./PriceInput"

export const PriceFilter = ({ min, setMin, max, setMax }) => {
  const [value, setValue] = useState("")

  return (
    <div className={styles.container}>
      <h2 className="titleH2">Filtrar por preço</h2>
      <div className={styles.containerInputs}>
        <PriceInput
          className={styles.priceInput}
          id="min"
          label="Mínimo (R$)"
          value={min}
          setValue={setMin}
        />
        <PriceInput
          className={styles.priceInput}
          id="max"
          label="Maximo (R$)"
          value={max}
          setValue={setMax}
        />
      </div>
    </div>
  )
}
