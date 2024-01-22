import styles from './styles.module.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const DropdownItem = (props) => {

  const navigate = useNavigate();

  const signOutUser = async() => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch(error) {
      console.error(error);
    }
  };

  const handleClick = (command) => {
    switch(command) {
      case "signout":
        signOutUser();
        break;
      case "redirect":
        window.open(props.link, "_blank", 'noreferrer');
        break;
    }
  };

  return(
    <p className={styles.dropdownItem} onClick={() => handleClick(props.command)}>
      <span className={styles.iconButton}>
        {props.leftIcon}
      </span>
      {props.children}
    </p>
  )
}

export default DropdownItem;