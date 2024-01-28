import { useSetSavingsGoal } from '../../hooks/useSetSavingsGoal';
import styles from './styles.module.scss';
import { useState } from 'react';
import { useDeleteSavingsGoal } from '../../hooks/useDeleteSavingsGoal';

const SavingsGoalDetail = ({ currentGoal }) => {

  const { setGoal } = useSetSavingsGoal();
  const { deleteSavingsGoal } = useDeleteSavingsGoal();

  const [isEditing, setIsEditing] = useState(false);
  const [budgetUpdate, setBudgetUpdate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoal({goalID: currentGoal.id, goalAddition: Number(budgetUpdate)});
    setIsEditing(false);
    setBudgetUpdate("");
  };

  return (
    <div className={styles.savingsGoalDetail}>
      <h2>Amount Saved:</h2>
      <p>${currentGoal === undefined ? "0.00" : currentGoal.goalAmountSaved}</p>
      <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input type="number" step="0.01" placeholder="Add to Goal..." onChange={(e) => setBudgetUpdate(e.target.value)}/>
          <button>Save</button>
        </form>
        
      )}
      <span onClick={() => deleteSavingsGoal(currentGoal.id)}>Delete</span>

    </div>
  )
};

export default SavingsGoalDetail;