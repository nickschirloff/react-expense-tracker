import styles from './styles.module.scss';
import { formatNumberString } from '../../util/Util';

const Expenses = (props) => {
 
  return(
    <div className={styles.monthlyExpenses}>
      <h2>Your Total Monthly Balance:</h2>
      {props.expenses >= 0 ? 
        <p>${formatNumberString(props.expenses)}</p> :
        <p>-${formatNumberString(parseFloat(props.expenses*-1).toFixed(2))}</p>
      }
    </div>
  )
}

export default Expenses;