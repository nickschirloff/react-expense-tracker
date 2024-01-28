import styles from './styles.module.scss';
import { formatNumberString, getGoalPercentage } from '../../util/Util';
import { useEffect, useState } from 'react';
import { useGetSavingsGoals } from '../../hooks/useGetSavingsGoals';
import SavingsGoalDetail from './SavingsGoalDetail';

import SavingsGoalList from './SavingsGoalList';

const SavingsGoal = () => {
  console.log("render");
  const { goals } = useGetSavingsGoals();

  const [currentGoal, setCurrentGoal] = useState({});
  const [goalIndex, setGoalIndex] = useState(0);

  const updateGoalListIndex = (newIndex) => {
    setGoalIndex(newIndex);
  };

  useEffect(() => {
    console.log("UE");
    setCurrentGoal(goals[goalIndex]);
  }, [goals, goalIndex]);
  
  return(
    <div className={styles.savings}>
      <div className={styles.savingsContainer}>
        <div className={styles.savingsGoal}>
          <SavingsGoalList goals={goals} currentGoal={currentGoal} setCurrentGoal={setCurrentGoal} updateIndex={updateGoalListIndex}/>
          <SavingsGoalDetail currentGoal={currentGoal} />
        </div>
        {currentGoal !== undefined && 
          <div className={styles.info}>
            <span>{getGoalPercentage(currentGoal.goalAmountSaved, currentGoal.goalAmount)}% of Goal (${formatNumberString('' + currentGoal.goalAmount)})</span>
            <span>Deadline: {currentGoal.goalDeadline}</span>
          </div>
        }
      </div>
    </div>
  )
}

export default SavingsGoal;