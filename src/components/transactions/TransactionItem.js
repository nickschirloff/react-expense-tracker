import styles from './styles.module.scss';
import { useDeleteTransaction } from '../../hooks/useDeleteTransaction';
import { formatNumberString } from '../../util/Util';

const TransactionItem = ({ transaction }) => {

  const { deleteTransaction } = useDeleteTransaction();
  const { timestamp, description, amount, type, id } = transaction; 
  
  return(
    <div className={styles.transactionItem}>
      <div className={styles.transactionData}>
        <p>{timestamp}</p>
        <div className={styles.innerTransactionDiv}>
          {(type === "credit") ? 
            <p className={styles.credit}>{formatNumberString("" + amount)}</p> :
            <p className={styles.debit}>-{formatNumberString("" + amount)}</p>
          }
          <span>{description}</span>
        </div>
      </div>
      <button onClick={() => deleteTransaction(id)}>X</button>
    </div>
  )
}

export default TransactionItem;