import styles from './styles.module.scss';

const DropdownItem = (props) => {

  return(
    <a href="/" className={styles.dropdownItem}>
      <span className={styles.iconButton}>
        {props.leftIcon}
      </span>
      {props.children}
    </a>
  )
}

export default DropdownItem;