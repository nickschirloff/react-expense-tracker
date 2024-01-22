import styles from './styles.module.scss';
import { useState } from 'react';

const Budget = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  return(
    <div className={styles.monthlyBudget}>
      <h2>Your Monthly Spending Budget:</h2>
      <p>${props.budget === undefined ? "0.00" : props.budget}</p>
      <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
      {isEditing && (
        <form>
            <input type="text" placeholder="Add New Budget Amount..." />
            <button>Finish</button>
        </form>
      )}
    </div>

  )
}

export default Budget;