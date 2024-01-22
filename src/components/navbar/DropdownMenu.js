import styles from './styles.module.scss';
import DropdownItem from './DropdownItem';
import { ReactComponent as GitIcon } from '../../assets/icons/github-142-svgrepo-com.svg';
import { ReactComponent as SignOutIcon } from '../../assets/icons/signout-svgrepo-com.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icons/web-svgrepo-com.svg';

const DropdownMenu = () => {

  const githubLink = "https://github.com/nickschirloff/react-expense-tracker";
  const websiteLink = "https://nickschirloff.com/";

  return(
    <div className={styles.dropdown}>
      <DropdownItem
        leftIcon={<GitIcon />}
        command={"redirect"}
        link={githubLink}
        >
          Github
      </DropdownItem>
      <DropdownItem
        leftIcon={<WebsiteIcon />}
        command={"redirect"}
        link={websiteLink}
        >
          Website
      </DropdownItem>
      <DropdownItem
        leftIcon={<SignOutIcon />}
        command={"signout"}
        >
          Sign Out
      </DropdownItem>
    </div>
  )
}

export default DropdownMenu;