import styles from './styles.module.scss';

const Navbar = (props) => {
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        {props.children}
      </ul>
    </nav>
  )
}

export default Navbar;