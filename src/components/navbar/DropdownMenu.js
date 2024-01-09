import styles from './styles.module.scss';
import DropdownItem from './DropdownItem';
import { ReactComponent as GitIcon } from '../../assets/icons/github-142-svgrepo-com.svg';

const DropdownMenu = () => {

  return(
    <div className={styles.dropdown}>
      <DropdownItem
        leftIcon={<GitIcon />}>
            Test
      </DropdownItem>
    </div>
  )
}

export default DropdownMenu;