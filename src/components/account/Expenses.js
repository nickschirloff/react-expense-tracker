import styles from './styles.module.scss';

const Expenses = (props) => {

  return(
    <div className={styles.monthlyExpenses}>
      <h2>Your Total Monthly Balance:</h2>
      <p>${props.expenses === undefined ? "0.00" : props.expenses}</p>
    </div>
  )
}

export default Expenses;