import Navbar from '../../components/navbar/Navbar';
import NavItem from '../../components/navbar/NavItem';
import DropdownMenu from '../../components/navbar/DropdownMenu';
import AccountInfo from '../../components/account/AccountInfo';
import SavingsGoal from '../../components/savings/SavingsGoal';
import Transactions from '../../components/transactions/Transactions';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { useGetSavingsGoals } from '../../hooks/useGetSavingsGoals';

const Home = () => {

  const { transactions, transactionsTotal } = useGetTransactions();
  const { goals } = useGetSavingsGoals();

  console.log("Render");

  return(
    <>
      <Navbar>
        <NavItem>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <AccountInfo transactionsTotal={transactionsTotal} />
      <SavingsGoal data={goals} />
      <Transactions userTransactions={transactions} />
    </>
  )
}

export default Home;