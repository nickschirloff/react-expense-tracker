import Navbar from '../../components/navbar/Navbar';
import NavItem from '../../components/navbar/NavItem';
import DropdownMenu from '../../components/navbar/DropdownMenu';
import AccountInfo from '../../components/account/AccountInfo';
import SavingsGoal from '../../components/savings/SavingsGoal';
import Transactions from '../../components/transactions/Transactions';
import { useGetTransactions } from '../../hooks/useGetTransactions';

const Home = () => {

  const { transactions, transactionsTotal } = useGetTransactions();

  return(
    <>
      <Navbar>
        <NavItem>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <AccountInfo transactionsTotal={transactionsTotal} />
      <SavingsGoal />
      <Transactions userTransactions={transactions} />
    </>
  )
}

export default Home;