import './App.css';
import NavItem from './components/navbar/NavItem';
import Navbar from './components/navbar/Navbar';
import TestImg from './assets/testimg/testperson.jpg';
import DropdownMenu from './components/navbar/DropdownMenu';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={TestImg}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
