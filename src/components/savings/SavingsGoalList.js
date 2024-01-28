import styles from './styles.module.scss';
import moment from 'moment';
import { useState } from 'react';
import { useAddSavingsGoal } from '../../hooks/useAddSavingsGoal';

import { formatNumberString } from '../../util/Util';

const SavingsGoalList = ({ goals, currentGoal, updateIndex }) => {

    const { addGoal } = useAddSavingsGoal();

    const [isEditing, setIsEditing] = useState(false);

    const [newGoalDesc, setNewGoalDesc] = useState("");
    const [newGoalAmount, setNewGoalAmount] = useState("");
    const [newGoalDeadline, setNewGoalDeadline] = useState(new Date());


    const handleGoalSelect = (e) => {
        updateIndex(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addGoal({
          goalName: newGoalDesc,
          goalAmount: Number(newGoalAmount),
          goalDeadline: newGoalDeadline
        });
        setNewGoalDesc("");
        setNewGoalAmount("");
        setNewGoalDeadline("");
      }

    return (
      <div className={styles.savingsGoalList}>
        <h2>Your Current Savings Goal:</h2>
        <select onChange={handleGoalSelect} defaultValue={currentGoal}>
            {
                goals.map((goal, index) => {
                    return <option value={index} key={index}>{goal.goalName}</option>
                })
            }
        </select>
        <span onClick={() => setIsEditing(!isEditing)}>Add</span>
        {isEditing &&
          <form>
            <input type="text" placeholder="Add New Goal" onChange={(e) => setNewGoalDesc(e.target.value)} />
            <input type="number" step="0.01" placeholder="Budget Amount" onChange={(e) => setNewGoalAmount(e.target.value)} />
            <p>Deadline:</p>
            <input type="date" onChange={(e) => setNewGoalDeadline(moment(e.target.value).format("MM/DD/YYYY"))} />
            <button onClick={handleSubmit}>Save</button>
          </form>
        }

      </div>
    )
};

export default SavingsGoalList;
