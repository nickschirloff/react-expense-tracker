import styles from './styles.module.scss';
import { useState } from 'react';
import { useGetUserData } from '../../hooks/useGetUserData';

const NavItem = (props) => {

  const { profilePicture } = useGetUserData();
  const [open, setOpen] = useState(false);

  return(
    <li className={styles.navItem}>
      <img className={styles.navIcon} src={profilePicture} alt="" onClick={() => setOpen(!open)} />
      {open && props.children}
    </li>
  )
}

export default NavItem;