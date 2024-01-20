import styles from './styles.module.scss';
import TransactionItem from './TransactionItem';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { useState } from 'react';

const Transactions = () => {

  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0.00);
  const [type, setType] = useState("debit");

  const onSubmit = async(e) => {
    e.preventDefault();
    addTransaction({
      description,
      amount,
      type
    });
  }


  return(
    <div className={styles.transactions}>
      <h1>Transactions</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Description" required onChange={(e) => setDescription(e.target.value)}/>
        <input type="number" placeholder="Amount" min="0" required onChange={(e) => setAmount(e.target.value)} />
        <input type="radio" id="credit" value="credit" checked={type === "credit"} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="credit">Credit</label>
        <input type="radio" id="debit" value="debit" checked={type === "debit"} onChange={(e) => setType(e.target.value)}/>
        <label htmlFor="debit">Debit</label>
        <button>Add</button>
      </form>
      <div className={styles.transactionsContainer}>
        {transactions.map((transaction, index) => {
          const { timestamp, description, amount, type} = transaction;
          return <TransactionItem timestamp={timestamp} description={description} amount={amount} type={type} key={index} />
        })}
      </div>
    </div>
  )
}

export default Transactions