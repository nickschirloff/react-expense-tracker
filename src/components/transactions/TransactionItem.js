import styles from './styles.module.scss';

const TransactionItem = (props) => {

  return(
    <div className={styles.transactionItem}>
      <div className={styles.transactionData}>
        <p>{props.timestamp}</p>
        {(props.type === "credit") ? 
          <p className={styles.credit}>{props.amount}</p> :
          <p className={styles.debit}>-{props.amount}</p>
        }
        <span>{props.description}</span>
      </div>
      <button>X</button>
    </div>
  )
}

export default TransactionItem;