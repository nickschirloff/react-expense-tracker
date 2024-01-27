import styles from './styles.module.scss';
import { useState } from 'react';
import { useSetBudget } from '../../hooks/useSetBudget';

const Budget = (props) => {

  const { setBudget } = useSetBudget();
  const [isEditing, setIsEditing] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [newBudget, setNewBudget] = useState(0.00);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setBudget(newBudget);
    setNewBudget(0.00);
  };

  const formatBudgetString = (number) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return(
    <div className={styles.monthlyBudget}>
      <h2>Your Monthly Spending Budget:</h2>
      <p>${props.budget === undefined ? "0.00" : formatBudgetString("" + props.budget)}</p>
      <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
      {isEditing && (
        <form onSubmit={handleSubmit}>
            <input type="number" step="0.01" placeholder="Set New Budget..." onChange={(e) => setNewBudget(Number(e.target.value))} />
            <button>Finish</button>
        </form>
      )}
    </div>

  )
}

export default Budget;