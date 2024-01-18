import styles from './styles.module.scss';

const Expenses = (props) => {

  return(
    <div className={styles.monthlyExpenses}>
      <h2>Your total expenses this month:</h2>
      <p>${props.expenses === undefined ? "0.00" : props.expenses}</p>
    </div>
  )
}

export default Expenses;