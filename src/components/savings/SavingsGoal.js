import styles from './styles.module.scss';
import { formatNumberString, getGoalPercentage } from '../../util/Util';
import { useEffect, useState } from 'react';
import { useAddSavingsGoal } from '../../hooks/useAddSavingsGoal';
import { useGetSavingsGoals } from '../../hooks/useGetSavingsGoals';

const SavingsGoal = () => {

  const { goals } = useGetSavingsGoals();

  const [currentGoal, setCurrentGoal] = useState({});

  useEffect(() => {
    setCurrentGoal(goals[0]);
  }, [goals[0]]);

  console.log("CG: " + currentGoal);

  const [isEditing, setIsEditing] = useState(false);
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const handleSelectChange = (e) => {
    setCurrentGoal(goals[e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  
  return(
    <div className={styles.savings}>
      <div className={styles.savingsContainer}>
        <div className={styles.savingsGoal}>
          <div className={styles.goal}>
            <h2>Your Current Savings Goal:</h2>
            <select onChange={handleSelectChange} defaultValue={goals[0]}>
              {
                goals.map((goal, index) => {
                  return  <option value={index} key={index}>{formatNumberString('' + goal.goalAmount)} - {goal.goalName}</option>;
                }) 
              }
            </select>
            <span onClick={() => setIsAddingGoal(!isAddingGoal)}>Add</span>
            {isAddingGoal && (
              <form>
                <input type="text" placeholder="Add New Goal" />
                <input type="number" step="0.01" placeholder="Budget Amount" />
                <p>Deadline:</p>
                <input type="date" />
                <button>Save</button>
              </form>
            )}
          </div>
          <div className={styles.saved}>
            <h2>Amount Saved:</h2>
            <p>${currentGoal === undefined ? "0.00" : currentGoal.amountSaved}</p>
            <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
            {isEditing && (
              <form>
                <input type="number" step="0.01" placeholder="Add to Goal..." />
                <button>Save</button>
              </form>
            )}
          </div>
        </div>
        <span className={styles.percentSaved}>
          {currentGoal === undefined ? "0.00" : getGoalPercentage(currentGoal.amountSaved, currentGoal.goalAmount)}% of Goal Saved
        </span>
      </div>
    </div>
  )
}

export default SavingsGoal;