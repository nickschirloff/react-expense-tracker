import styles from './styles.module.scss';
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';

const TransactionItem = ({ transaction }) => {

  const { deleteTransaction } = useDeleteTransaction();
  const { timestamp, description, amount, type, id } = transaction; 
  
  return(
    <div className={styles.transactionItem}>
      <div className={styles.transactionData}>
        <p>{timestamp}</p>
        <div className={styles.innerTransactionDiv}>
          {(type === "credit") ? 
            <p className={styles.credit}>{amount.toFixed(2)}</p> :
            <p className={styles.debit}>-{amount.toFixed(2)}</p>
          }
          <span className={styles.transactionDesc}>{description}</span>
        </div>
      </div>
      <button onClick={() => deleteTransaction(id)}>X</button>
    </div>
  )
}

export default TransactionItem;