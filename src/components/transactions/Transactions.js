import TransactionItem from './TransactionItem';
import styles from './styles.module.scss';

const Transactions = () => {

  const temp = {
    "transactions": [
      {
        "desc": "test",
        "amount": 1.41,
        "type": "debit"
      },
      {
        "desc": "test2",
        "amount": 4.56,
        "type": "credit"
      }
    ]
  }

  return(
    <div className={styles.transactions}>
      <h1>Transactions</h1>
      <div className={styles.transactionsContainer}>
        {temp.transactions.map((item) => {
          return <TransactionItem description={item.desc} amount={item.amount} type={item.type} />
        })}
      </div>
    </div>
  )
}

export default Transactions