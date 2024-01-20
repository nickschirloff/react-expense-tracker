import styles from './styles.module.scss';
import { useGetUserData } from '../../hooks/useGetUserData';

const Navbar = (props) => {
  
  const { name } = useGetUserData();

  return (
    <div className={styles.navbar}>
      <h3>Voyager Expense Tracker</h3>
      <div className={styles.navbarRight}>
        <p>{name}</p>
        <nav className={styles.navbarDropdown}>
          <ul className={styles.navbarNav}>
            {props.children}
          </ul>
        </nav>
      </div>
    </div>

  )
}

export default Navbar;