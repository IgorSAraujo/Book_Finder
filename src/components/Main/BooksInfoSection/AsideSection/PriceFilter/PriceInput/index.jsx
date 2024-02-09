import styles from "./styles.module.scss"

export const PriceInput = ({ id, label, value, setValue }) => {
  return (
    <div className={styles.container}>
      <label className="textLabel" htmlFor={id}>
        {label}
      </label>
      <input
        className="inputPrice"
        type="number"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min="1"
      />
    </div>
  )
}
