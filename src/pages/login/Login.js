import styles from './styles.module.scss';
import { auth, provider } from '../../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const response = await signInWithPopup(auth, provider);
    const authData = {
      userID: response.user.uid,
      name: response.user.displayName,
      profilePicture: response.user.photoURL,
      isAuth: true
    };
    localStorage.setItem("auth", JSON.stringify(authData));
    navigate("/home");
  };

  return(
    <div className={styles.login}>
      <h1>Voyager Expense Tracker</h1>
      <h3>Explore the World, and Beyond</h3>
      <p>Sign in with Google</p>
      <button className={styles.googleLoginButton} onClick={signInWithGoogle}>Sign In</button>
    </div>
  )
}

export default Login;