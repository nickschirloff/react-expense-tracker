import styles from './styles.module.scss';
import { useState } from 'react';

const Budget = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  return(
    <div className={styles.monthlyBudget}>
      <h2>Your monthly spending budget is:</h2>
      <p>${props.budget === undefined ? "0.00" : props.budget}</p>
      <span onClick={() => setIsEditing(!isEditing)}>Edit</span>
      {isEditing && (
        <form>
            <input type="text" placeholder="New Monthly Budget..." />
            <button>Finish</button>
        </form>
      )}
    </div>

  )
}

export default Budget;