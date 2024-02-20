import styles from './styles.module.scss';
import TransactionItem from './TransactionItem';
import { useAddTransaction } from '../../hooks/useAddTransaction';
import { useState } from 'react';

const Transactions = ({ userTransactions }) => {

  const { addTransaction } = useAddTransaction();

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

    setDescription("");
    setAmount("");
    setType("debit");
  }


  return(
    <div className={styles.transactions}>
      <h1>Transactions</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Description" required value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="number" step="0.01" placeholder="Amount" min="0" required value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <div className={styles.radioButtons}>
          <input type="radio" id="credit" value="credit" checked={type === "credit"} onChange={(e) => setType(e.target.value)}/>
          <label htmlFor="credit">Credit</label>
          <input type="radio" id="debit" value="debit" checked={type === "debit"} onChange={(e) => setType(e.target.value)}/>
          <label htmlFor="debit">Debit</label>
        </div>
        <button>Add</button>
      </form>
      <div className={styles.transactionsContainer}>
        {userTransactions.map((transaction, index) => {
          return <TransactionItem transaction={transaction} key={index} />
        })}
      </div>
    </div>
  )
}

export default Transactions