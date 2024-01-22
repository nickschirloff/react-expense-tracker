import styles from './styles.module.scss';
import { useState } from 'react';
import { auth, provider } from '../../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../../assets/img/voyager.jpg';

const Login = () => {

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        const authData = {
          userID: response.user.uid,
          name: response.user.displayName,
          profilePicture: response.user.photoURL,
          isAuth: true
        };
        localStorage.setItem("auth", JSON.stringify(authData));
        navigate("/home");
      })
      .catch((error) => {
        const code = handleError(error.code);
        setLoginError(code);
      });
  };

  const handleError = (error) => {
    switch(error) {
      case "auth/cancelled-popup-request":
        return "Only one sign-in window can be open at a time.";
      case "auth/popup-blocked":
        return "Pop-up blocked. Make sure pop-up windows are enabled.";
      case "auth/popup-closed-by-user":
        return "Please sign-in before continuing.";
      default:
        return "Something went wrong. Try again later.";
    }
  };

  return(
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <h1>Voyager Expense Tracker</h1>
        <h3>Explore the World, and Beyond</h3>
        <p>Sign in with Google</p>
        <button className={styles.googleLoginButton} onClick={signInWithGoogle}>Sign In</button>
        {loginError !== "" &&
          <p className={styles.error}>{loginError}</p>
        }
      </div>
      <a>Image Sourced from Wikipedia, originally by NASA</a>
    </div>
  )
}

export default Login;