import styles from './styles.module.scss';
import SavingsGoalDetail from './SavingsGoalDetail';
import SavingsGoalList from './SavingsGoalList';
import { formatNumberString, getGoalPercentage } from '../../util/Util';
import { useEffect, useState } from 'react';
import { useGetSavingsGoals } from '../../hooks/useGetSavingsGoals';

const SavingsGoal = () => {
  const { goals } = useGetSavingsGoals();

  const [currentGoal, setCurrentGoal] = useState({});
  const [goalIndex, setGoalIndex] = useState(0);

  const updateGoalListIndex = (newIndex) => {
    setGoalIndex(newIndex);
  };

  useEffect(() => {
    setCurrentGoal(goals[goalIndex]);
  }, [goals, goalIndex]);
  
  return(
    <div className={styles.savings}>
      <div className={styles.savingsContainer}>
        <div className={styles.savingsGoal}>
          <SavingsGoalList goals={goals} currentGoal={currentGoal} updateIndex={updateGoalListIndex}/>
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