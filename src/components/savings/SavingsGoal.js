import styles from './styles.module.scss';
import { useState } from 'react';

const SavingsGoal = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  return(
    <div className={styles.savings}>
      <div className={styles.savingsContainer}>
        <div className={styles.goal}>
           <h2>Your current savings goal:</h2>
           <select>
            {
              props.data.uid1.map((item) => {
                return  <option value={item}>{item}</option>;
              }) 
            }
           </select>
        </div>
        <div className={styles.saved}>
          <h2>Amount Saved:</h2>
          <p>${props.amountSaved === undefined ? "0.00" : props.amountSaved}</p>
          <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
          {isEditing && (
            <form>
              <input type="text" placeholder="Add to Goal" />
              <button>Save</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default SavingsGoal;