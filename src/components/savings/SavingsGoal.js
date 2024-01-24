import styles from './styles.module.scss';
import { useState } from 'react';

const SavingsGoal = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  return(
    <div className={styles.savings}>
      <div className={styles.savingsContainer}>
        <div className={styles.savingsGoal}>
          <div className={styles.goal}>
            <h2>Your Current Savings Goal:</h2>
            <select>
              {
                props.data.uid1.map((item, index) => {
                  return  <option value={item} key={index}>{item}</option>;
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
            <p>${props.amountSaved === undefined ? "0.00" : props.amountSaved}</p>
            <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
            {isEditing && (
              <form>
                <input type="number" step="0.01" placeholder="Add to Goal..." />
                <button>Save</button>
              </form>
            )}
          </div>
        </div>
        <span className={styles.percentSaved}>0% of Goal Saved</span>
      </div>
    </div>
  )
}

export default SavingsGoal;