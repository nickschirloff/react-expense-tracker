import Budget from './Budget';
import Expenses from './Expenses';
import styles from './styles.module.scss';
import { useState } from 'react';

const AccountInfo = (props) => {

  const [overBudget, setOverBudget] = useState(false);

  const getIntro = () => {
    const currTime = new Date().getHours();
    if(currTime < 5) {
      return "Good Evening"
    } else if(currTime < 12) {
      return "Good Morning";
    } else if(currTime < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const checkBudget = (balance, budget) => {
    setOverBudget(balance > budget ? true : false);
  };

  return(
    <div className={styles.account}>
      <h1>{getIntro()}, {props.name}.</h1>
      <div className={styles.accountContainer}>
        <div className={styles.monthlyDetails}>
          <Expenses />
          <Budget />
        </div>
        {overBudget ? 
          <span className={styles.overbudget}>You have over spent your monthly income. Be careful with future spending.</span> :
          <span className={styles.underbudget}>Your spending this month is in good standing. Good job!</span>
        }
      </div>
    </div>
  )

}

export default AccountInfo;