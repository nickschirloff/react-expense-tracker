import styles from './styles.module.scss';
import Budget from './Budget';
import Expenses from './Expenses';
import { useGetBudget } from '../../hooks/useGetBudget';
import { useGetUserData } from '../../hooks/useGetUserData';

const AccountInfo = (props) => {

  const { name } = useGetUserData();
  const { budgetAmount } = useGetBudget();

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

  const checkBudget = () => {
    if(parseFloat(props.transactionsTotal) > parseFloat(budgetAmount)) {
      return <span className={styles.overbudget}>You have over spent your monthly income. Be careful with future spending.</span>;
    } else {
      return <span className={styles.underbudget}>Your spending this month is in good standing. Good job!</span>;
    }
  };

  return(
    <div className={styles.account}>
      <h1>{getIntro()}, {name}.</h1>
      <div className={styles.accountContainer}>
        <div className={styles.monthlyDetails}>
          <Expenses expenses={props.transactionsTotal} />
          <Budget budget={budgetAmount} />
        </div>
        {checkBudget()}
      </div>
    </div>
  )

}

export default AccountInfo;