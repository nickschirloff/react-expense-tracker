import styles from './styles.module.scss';
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import { formatString } from '../../util/Util';

const TransactionItem = (props) => {

  const { deleteTransaction } = useDeleteTransaction();
 
  return(
    <div className={styles.transactionItem}>
      <div className={styles.transactionData}>
        <p>{props.timestamp}</p>
        {(props.type === "credit") ? 
          <div className={styles.innerTransactionDiv}>
            <p className={styles.credit}>{props.amount}</p>
            <span> {props.description}</span>
          </div>
           :
          <div className={styles.innerTransactionDiv}>
            <p className={styles.debit}>-{props.amount}</p>
            <span>{props.description}</span>
          </div>
        }
      </div>
      <button onClick={() => deleteTransaction(props.id)}>X</button>
    </div>
  )
}

export default TransactionItem;