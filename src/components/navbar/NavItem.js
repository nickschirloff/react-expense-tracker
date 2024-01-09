import styles from './styles.module.scss';
import { useState } from 'react';

const NavItem = (props) => {

  const [open, setOpen] = useState(false);

  return(
    <li className={styles.navItem}>
      <img className={styles.navIcon} src={props.icon} alt="" onClick={() => setOpen(!open)}/>
    
      {open && props.children}
    </li>
  )
}

export default NavItem;