import styles from './styles.module.scss';
import VoyagerImg from '../../assets/img/voyager.jpg'

const Splash = () => {

  return(
    <div className={styles.splash}>
      <img src={VoyagerImg} alt="" />
      <div className={styles.splashDesc}>
        <h1>Voyager Expense Tracker</h1>
        <h3>Explore the world, and beyond.</h3>
      </div>
      <a href="https://en.wikipedia.org/wiki/File:Voyager_spacecraft.jpg">Photo sourced from Wikipedia, originally by NASA</a>
    </div>
  )
}

export default Splash;