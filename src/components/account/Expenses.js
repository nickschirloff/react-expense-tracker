import styles from './styles.module.scss';

const Expenses = (props) => {

  const formatString = (str) => {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
 
  return(
    <div className={styles.monthlyExpenses}>
      <h2>Your Total Monthly Balance:</h2>
      {props.expenses >= 0 ? 
        <p>${formatString(props.expenses)}</p> :
        <p>-${formatString(parseFloat(props.expenses*-1).toFixed(2))}</p>
      }
    </div>
  )
}

export default Expenses;