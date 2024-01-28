import styles from './styles.module.scss';
import moment from 'moment';
import { formatNumberString, getGoalPercentage } from '../../util/Util';
import { useEffect, useState } from 'react';
import { useAddSavingsGoal } from '../../hooks/useAddSavingsGoal';
import { useGetSavingsGoals } from '../../hooks/useGetSavingsGoals';

const SavingsGoal = () => {
  console.log("Render Tracking: Goals");
  const { goals } = useGetSavingsGoals();

  const [currentGoal, setCurrentGoal] = useState({});

  useEffect(() => {
    setCurrentGoal(goals[0]);
  }, [goals]);

  const { addGoal } = useAddSavingsGoal();

  const [isEditing, setIsEditing] = useState(false);
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const [newGoalDesc, setNewGoalDesc] = useState("");
  const [newGoalAmount, setNewGoalAmount] = useState("");
  const [newGoalDeadline, setNewGoalDeadline] = useState(new Date());

  const handleSelectChange = (e) => {
    setCurrentGoal(goals[e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("TEST: " + newGoalDesc);
    // console.log("TEST2: " + newGoalAmount);
    // console.log("TEST3: " + newGoalDeadline);

    addGoal({
      goalName: newGoalDesc,
      goalAmount: Number(newGoalAmount),
      goalDeadline: newGoalDeadline
    });
    setNewGoalDesc("");
    setNewGoalAmount("");
    setNewGoalDeadline("");
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
                <input type="text" placeholder="Add New Goal" onChange={(e) => setNewGoalDesc(e.target.value)} />
                <input type="number" step="0.01" placeholder="Budget Amount" onChange={(e) => setNewGoalAmount(e.target.value)} />
                <p>Deadline:</p>
                <input type="date" onChange={(e) => setNewGoalDeadline(moment(e.target.value).format("MM/DD/YYYY"))} />
                <button onClick={handleSubmit}>Save</button>
              </form>
            )}
          </div>
          <div className={styles.saved}>
            <h2>Amount Saved:</h2>
            <p>${currentGoal === undefined ? "0.00" : currentGoal.goalAmountSaved}</p>
            <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
            {isEditing && (
              <form>
                <input type="number" step="0.01" placeholder="Add to Goal..." />
                <button>Save</button>
              </form>
            )}
          </div>
        </div>
        {currentGoal !== undefined &&
          <div className={styles.percentSaved}>
            <span>{getGoalPercentage(currentGoal.goalAmountSaved, currentGoal.goalAmount)}% of Goal ({currentGoal.goalAmount})</span>
            <span>Deadline: {currentGoal.goalDeadline}</span>
          </div>
        
        }
        {/* <span className={styles.percentSaved}>
          {currentGoal === undefined ? "0.00" : getGoalPercentage(currentGoal.goalAmountSaved, currentGoal.goalAmount)}% of Goal Saved
        </span> */}
      </div>
    </div>
  )
}

export default SavingsGoal;