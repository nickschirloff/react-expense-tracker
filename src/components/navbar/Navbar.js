import styles from './styles.module.scss';

const Navbar = (props) => {
  
  return (
    <div className={styles.navbar}>
      <h3>Voyager Expense Tracker</h3>
      <div className={styles.navbarRight}>
        <p>Nick</p>
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