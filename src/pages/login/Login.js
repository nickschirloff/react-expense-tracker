import styles from './styles.module.scss';
import { useState } from 'react';
import { auth, provider } from '../../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom';
import { useGetUserData } from '../../hooks/useGetUserData';
import GoogleIcon from '../../assets/img/google_logo.png';
import BackgroundImage from '../../assets/img/voyager.jpg';

const Login = () => {

  const navigate = useNavigate();
  const { isAuth } = useGetUserData();
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

  if(isAuth) {
    return <Navigate to="/home" />
  }

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
      <img className={styles.backgroundImage} src={BackgroundImage} alt="" />
      <div className={styles.loginContainer}>
        <h1>Voyager Expense Tracker</h1>
        <h3>Explore the World, and Beyond</h3>
        <span>Your all-in-one manager for tracking your monthly expenses, and planning for your future adventures.</span>
        <span>All with just one easy click.</span>
        <button className={styles.googleLoginButton} onClick={signInWithGoogle}>
          <img src={GoogleIcon} alt="" />
          <p>Sign-in With Google</p>
        </button>
        {loginError !== "" &&
          <p className={styles.error}>{loginError}</p>
        }
      </div>
      <a href="https://en.wikipedia.org/wiki/File:Voyager_spacecraft.jpg" target="_blank" rel="noreferrer">
        Image Sourced from Wikipedia, Originally By NASA
      </a>
    </div>
  )
}

export default Login;