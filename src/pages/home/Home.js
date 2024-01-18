import Navbar from '../../components/navbar/Navbar';
import NavItem from '../../components/navbar/NavItem';
import DropdownMenu from '../../components/navbar/DropdownMenu';
import TestImg from '../../assets/testimg/testperson.jpg';
import AccountInfo from '../../components/account/AccountInfo';
import SavingsGoal from '../../components/savings/SavingsGoal';
import Transactions from '../../components/transactions/Transactions';

const Home = () => {

  const budgets = {
    "uid1" : [
      "sg1",
      "sg2"
    ],
    "uid2" : [
      "sg3",
      "sg4"
    ]
  }

  return(
    <>
      <Navbar>
        <NavItem icon={TestImg}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <AccountInfo />
      <SavingsGoal data={budgets} />
      <Transactions />
    </>
  )
}

export default Home;