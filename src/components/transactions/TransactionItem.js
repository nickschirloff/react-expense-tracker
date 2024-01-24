import styles from './styles.module.scss';

const TransactionItem = (props) => {

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
      <button>X</button>
    </div>
  )
}

export default TransactionItem;